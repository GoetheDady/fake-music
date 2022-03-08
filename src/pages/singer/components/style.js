import styled from 'styled-components';

export const SelectOptionsStyle = styled.div`
  width: 100%;
  font-size: 14px;
`;

export const SelectOption = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

export const SelectOptionLabel = styled.div`
  width: 60px;
`;

export const SelectOptionContent = styled.div`
  display: flex;
  /* grid-template-columns: repeat(auto-fill, 100px); */
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
`;

export const SelectOptionItem = styled.div`
  display: flex;
  font-size: 12px;
  padding: 0 15px;
  cursor: default;
  user-select: none;
  height: 20px;
  background-color: rgba(155, 178, 210, .2);
  align-items: center;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  &:hover {
    background-color: rgba(155, 178, 210, .6);
  }
  &.active {
    background-color: rgba(155, 178, 210, .6);
  }
`;

export const SingerListStyle = styled.div`
  min-height: 200px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 170px);
  justify-content: space-between;
  grid-column-gap: 15px;
  grid-row-gap: 30px;
  font-size: 14px;
`;

export const SingerListItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
`;

export const ListItemImg = styled.img`
  width: 100%;
  height: 170px;
  margin-bottom: 5px;
  border-radius: 8px;
`;

export const ListItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemName = styled.div``;
