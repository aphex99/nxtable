'use client';

import {Clients} from "@/src/entities/clients/types";
import {getPaginationData} from '@/src/features/table/api/getPaginationData';
import {COUNT_PER_PAGE} from '@/src/features/table/model/consts';
import Table from '@/src/features/table/ui/Table/Table';
import TablePagination from "@/src/features/table/ui/TablePagination/TablePagination";
import {useEffect, useState} from "react";

type ClientsData = {
  clients: Clients
  totalCount: number | null
}

function isClientsData(data: Clients, totalCount: number | null) {
  return totalCount !== null &&
    Array.isArray(data) &&
    data.every(client => client &&
      'name' in client &&
      typeof client.name === 'string');
}

const TableComponent = () => {
  const [page, setPage] = useState<number>(1);
  const [clientsData, setClientsData] = useState<ClientsData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const {data, totalCount} = await getPaginationData(page, COUNT_PER_PAGE);
        if (isClientsData(data, totalCount)) {
          setClientsData({clients: data, totalCount: totalCount});
        }
      } catch (error) {
        console.error('Error fetching clients data: ', error);
      }
    }
    fetchData();
  }, []);

  if (!clientsData) return null;

  return (
    <div>
      <Table clients={clientsData.clients}/>
      <TablePagination setCurrentPage={setPage} totalCount={clientsData.totalCount}/>
    </div>
  );
};

export default TableComponent;
