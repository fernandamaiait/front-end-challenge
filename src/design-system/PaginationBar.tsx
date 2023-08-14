import ReactPaginate from 'react-paginate';

interface IPaginationBarProps {
  pageIndex: number;
  totalPages: number;
  handleClick: any;
  handleClickLastPage: any;
}

export default function PaginationBar({
  pageIndex,
  totalPages,
  handleClick,
  handleClickLastPage
}: IPaginationBarProps) {
  return (
    <div className="flex justify-center text-on-surface-highlight text-base font-bold">
      <ReactPaginate
        className="flex gap-4 self-center"
        breakLabel="..."
        nextLabel={pageIndex == totalPages ? '' : '>'}
        onPageChange={handleClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={pageIndex == 1 || pageIndex == null ? '' : '<'}
        renderOnZeroPageCount={null}
      />
      <div className="ml-4 cursor-pointer" onClick={handleClickLastPage}>
        Última
      </div>
    </div>
  );
}
