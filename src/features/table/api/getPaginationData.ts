'use server';

import { createClient } from '@/src/shared/supabase/server';

export async function getPaginationData(page: number, countPerPage: number) {
  const from = page > 1 ? (page - 1) * countPerPage : page;
  const to = from + countPerPage - 1;

  const baseClient = await createClient();

  const { data, count, error } = await baseClient
    .from('singers')
    .select('id, name, email, type', { count: 'exact' })
    .select()
    .range(from, to);
  if (error) {
    console.error('Error fetching singers: ', error);
    return { data: [], totalCount: 0 };
  }

  return { data, totalCount: count };
}
