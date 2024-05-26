import { serverSupabaseClient } from '#supabase/server';
import type { Database } from '~/types/supabase';

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event);
  const { data, error } = await client
    .from('Project')
    .select('name, picture, slug, TimelineEvent(date)');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
});
