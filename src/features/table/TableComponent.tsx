'use client';

import {Singers} from '@/src/entities/clients/types';
import {getPaginationData} from '@/src/features/table/api/getPaginationData';
import {COUNT_PER_PAGE} from '@/src/features/table/model/consts';
import Table from '@/src/features/table/ui/Table/Table';
import TablePagination from '@/src/features/table/ui/TablePagination/TablePagination';
import {useEffect, useState} from 'react';

type SingersData = {
  singers: Singers;
  totalCount: number | null;
};

function isSingersData(data: Singers, totalCount: number | null) {
  return (
    totalCount !== null &&
    Array.isArray(data) &&
    data.every(
      (singer) => singer && 'name' in singer && typeof singer.name === 'string',
    )
  );
}

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [singersData, setSingersData] = useState<SingersData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const {data, totalCount} = await getPaginationData(
          currentPage,
          COUNT_PER_PAGE,
        );
        console.log('Fetched Data: ', data);
        if (isSingersData(data, totalCount)) {
          setSingersData({singers: data, totalCount: totalCount});
        }
      } catch (error) {
        console.error('Error fetching singers data: ', error);
      }
    }

    fetchData();
  }, [currentPage]);

  if (!singersData) return null;

  return (
    <div className={'flex flex-col items-center w-xl'}>
      <Table singers={singersData.singers}/>
      <TablePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={singersData.totalCount}
      />
      <hr/>
    </div>
  );
};

export default TableComponent;
