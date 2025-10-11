'use client';

type TablePagination = {
  setCurrentPage: (page: number) => void
  totalCount: number | null
}

const TablePagination = ({setCurrentPage, totalCount}: TablePagination) => {

  const pageNumbers = [];

  if (totalCount) {
    for (let i = 1; i < totalCount; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <ul>
      {pageNumbers.map(num => {
        return (<li>{num}</li>);
      })}
    </ul>
  );
};

export default TablePagination;