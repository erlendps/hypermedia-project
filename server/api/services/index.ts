import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { data, error } = await client
    .from("Service")
    .select("name, picture, slug");

  if (error) {
    console.error(error);
    return null;
  }

  return data;
});
