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
  /* Should we do this?
  let dataWithTimeline = data.map((project) => {
    let firstDate = project.TimelineEvent.reduce((acc, curr) => {
      if (acc.date < curr.date) return acc;
      return curr;
    });
    let lastDate = project.TimelineEvent.reduce((acc, curr) => {
      if (acc.date > curr.date) return acc;
      return curr;
    });

    let timeline = `${firstDate.date} - ${lastDate.date}`;
    return { ...project, timeline };
  });*/

  return data;
});
