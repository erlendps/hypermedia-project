import { serverSupabaseClient } from '#supabase/server';
import type { Database } from '~/types/supabase';

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);
  const { data, error } = await client
    .from('Person')
    .select('firstName, lastName, mainRole, picture, slug');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
});
