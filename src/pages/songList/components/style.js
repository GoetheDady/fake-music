import styled from 'styled-components';

const TopHighqualityStyle = styled.div`
  width: 100%;
  height: 170px;
  background-image: url(${(props) => props.background});
  background-size: 200%;
  background-position: center center;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  user-select: none;
  margin-bottom: 20px;
`;

const TopHighqualityBlur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .4);
  backdrop-filter: blur(50px);
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const TopHighqualityImg = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
`;

const TopHighqualityDesc = styled.div`
  flex: 1;
`;

const TopHighqualityBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  height: 28px;
  border: 1px solid #deac67;
  color: #deac67;
  width: 100px;
  font-size: 14px;
  margin-bottom: 16px;
`;

const TopHighqualitySpan = styled.span`
  display: flex;
  align-items: center;
  margin-right: 5px;
  color: #deac67;
`;

const TopHighqualityName = styled.div`
  margin-bottom: 10px;
`;

const TopHighqualityInfo = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, .4);
`;

const HotCategoryStyle = styled.div`
  display: flex;
`;

const HotCategoryItem = styled.div`
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

const SongListContentStyle = styled.div``;

const SongListContentList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 170px);
  grid-row-gap: 30px;
  justify-content: space-between;
  min-height: 363px;
  position: relative;
`;

const SongListContentListItem = styled.div`

`;

const ItemImgWrapper = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemImgMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all .5s;
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent, rgba(0, 0, 0, 0.4));
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }
`;

const ItemName = styled.div`
  font-size: 12px;
`;

const ItemPlayCount = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const ItemArtist = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export {
  TopHighqualityStyle,
  TopHighqualityBlur,
  TopHighqualityImg,
  TopHighqualityDesc,
  TopHighqualityBtn,
  TopHighqualitySpan,
  TopHighqualityName,
  TopHighqualityInfo,
  HotCategoryStyle,
  HotCategoryItem,
  SongListContentStyle,
  SongListContentList,
  SongListContentListItem,
  ItemImgWrapper,
  ItemImg,
  ItemImgMask,
  ItemName,
  ItemPlayCount,
  ItemArtist,
};
