import ReactPaginate from 'react-paginate';
import { PaginationStyle } from './style';

function Pagination({ currentPag, handlePageClick, pageCount }) {
  return (
    <PaginationStyle>
      <ReactPaginate
        forcePage={currentPag}
        breakLabel="..."
        nextLabel="下一页 >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< 上一页"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="current-page"
        pageClassName="pagination-item"
        breakLinkClassName="pagination-point"
        previousLinkClassName="pagination-prev"
        nextLinkClassName="pagination-next"
        pageLinkClassName="pagination-item-a"
      />
    </PaginationStyle>
  );
}

export default Pagination;
