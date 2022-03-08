import styled from 'styled-components';

export const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .pagination {
    list-style: none;
    display: flex;
    padding: 0;
    .pagination-item,
    .pagination-point {
      width: 44px;
      justify-content: center;
      align-items: center;
    }
    .pagination-prev,
    .pagination-next {
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .pagination-item,
    .pagination-point,
    .pagination-prev,
    .pagination-next {
      font-size: 14px;
      display: flex;
      height: 20px;
      align-items: center;
      background-color: rgba(155, 178, 210, .2);
      border-radius: 10px;
      margin: 0 5px;
      cursor: pointer;
      &:hover {
        background-color: rgba(155, 178, 210, .6);
      }
      .pagination-item-a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
    }
    .current-page {
      background-color: rgba(155, 178, 210, .6);
    }
  }
`;
