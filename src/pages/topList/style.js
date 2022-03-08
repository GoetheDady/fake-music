import styled from 'styled-components';

export const TopListStyle = styled.div`
  width: 100%;
  padding: 30px;
  overflow: auto;
`;

export const TopListTitle = styled.div`
  width: 100%;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const OfficialTopList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-template-rows: 220px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const OfficialTopListItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const OfficialTopListItemUpdate = styled.div`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 140px;
  font-size: 14px;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemMask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, .4), transparent, rgba(0, 0, 0, .4));
`;

export const GlobalTopList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const GlobalTopListItem = styled.div`
  overflow: hidden;
  height: 180px;
  position: relative;
  font-size: 14px;
`;

export const GlobalItemImgWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 5px;
  font-weight: 100;
`;

export const GlobalItemImg = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
`;

export const GlobalItemMask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, .4), transparent, rgba(0, 0, 0, .4));
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4), rgba(0, 0, 0, .4));
  }
`;

export const GlobalItemPeople = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  font-size: 12px;
  align-items: center;
`;
