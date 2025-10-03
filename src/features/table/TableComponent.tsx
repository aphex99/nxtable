import Table from '@/src/features/table/ui/Table';
import { createClient } from '@/src/shared/supabase/server';
import { Suspense } from 'react';

const TableComponent = async () => {
  const baseClient = await createClient();
  const data = await baseClient.from('clients').select();

  const clients = data?.data;

  if (!clients) return null;

  return (
    <Suspense fallback={null}>
      <Table clients={clients} />
    </Suspense>
  );
};

export default TableComponent;
