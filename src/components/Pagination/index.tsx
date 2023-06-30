'use client';
import Pagination, { PaginationItem, Arrow, Label } from './styles';

import { usePagination, IUsePagination } from '@/customHooks/usePagination';

interface IPagination extends IUsePagination {
  label?: string;
  arrows?: boolean;
  onPageChange: (pageToGo: number) => void;
}

const Index = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  siblingCount,
  arrows = true,
  label,
}: IPagination) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => onPageChange(currentPage + 1);

  const onPrevious = () => onPageChange(currentPage - 1);

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Pagination>
      {label ? <Label>{label}</Label> : ''}
      <PaginationItem $disabled={currentPage === 1} onClick={onPrevious}>
        {arrows ? <Arrow $position="left" /> : ''}
      </PaginationItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === -1) {
          return (
            <PaginationItem key={pageNumber} $dots={true}>
              &#8230;
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            key={pageNumber}
            $selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      {/*  Seta de navegação da direita */}
      <PaginationItem $disabled={currentPage === lastPage} onClick={onNext}>
        {arrows ? <Arrow $position="right" /> : ''}
      </PaginationItem>
    </Pagination>
  );
};

export default Index;
