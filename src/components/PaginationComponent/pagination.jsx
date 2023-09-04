import React from 'react';
import { Pagination } from '@mantine/core';

const PaginationComponent = ({ currentPage, totalItems, numOfItem, onPageChange }) => {
  return (
    <Pagination
    numOfItem={numOfItem}
      total={totalItems}
      page={currentPage}
      onChange={onPageChange}
      withPagesCount
    />
  );
};

export default PaginationComponent;