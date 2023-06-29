'use client';
import Pagination, { PaginationItem, Arrow } from './styles';

import { usePagination, IUsePagination } from '@/customHooks/usePagination';

interface IPagination extends IUsePagination {
  onPageChange: (pageToGo: number) => void;
}

const Index = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  siblingCount,
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
      {/* Seta de navegação da esquerda */}
      <PaginationItem $disabled={currentPage === 1} onClick={onPrevious}>
        <Arrow $position="left" />
      </PaginationItem>
      {paginationRange.map((pageNumber) => {
        // Se o pageItem for um PONTO (DOT), renderize o caractere unicode DOTS
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
        <Arrow $position="right" />
      </PaginationItem>
    </Pagination>
  );
};

export default Index;
