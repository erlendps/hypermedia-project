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
  if (validateUUID(identifier)) key = 'projectId';
  else key = 'slug';

  const { data, error } = await client
    .from('Project')
    .select(
      '*, Person(firstName, lastName, slug, picture), TimelineEvent(date)'
    )
    .eq(key, identifier)
    .single();

  if (error) {
    console.error(error);
    throw createError({
      statusCode: 404,
      statusMessage: 'Project not found',
    });
  }

  return data;
});
