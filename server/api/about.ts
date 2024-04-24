import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { data, error } = await client
    .from("TestTable")
    .select("message")
    .single();
  if (error) console.log(error);
  return data;
});
