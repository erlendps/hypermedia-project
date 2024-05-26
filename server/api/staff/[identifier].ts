import { serverSupabaseClient } from '#supabase/server';
import { validate as validateUUID } from 'uuid';
import { Database } from '~/types/supabase';

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);
  const identifier = event.context.params?.identifier;
  if (!identifier) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No identifier supplied.',
    });
  }

  let key: string;
  if (validateUUID(identifier)) key = 'personId';
  else key = 'slug';

  const { data, error } = await client
    .from('Person')
    .select('*, Service(name, slug, picture), Project(name, slug, picture)')
    .eq(key, identifier)
    .single();

  if (error) {
    console.error(error);
    throw createError({
      statusCode: 404,
      statusMessage: 'Service not found',
    });
  }

  return data;
});
