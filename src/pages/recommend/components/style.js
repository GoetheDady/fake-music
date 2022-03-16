import styled from 'styled-components';

const listCommon = `
  display: grid;
  grid-column-gap: 20px;
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  position: relative;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

const itemCommon = `
  flex-shrink: 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

const BoutiqueListStyle = styled.div`
  ${listCommon}
  height: ${(props) => props.height || 'auto'};
  grid-template-columns: repeat(${(props) => props.length}, 214px);
`;

const BoutiqueItem = styled.div`
  height: 284px;
  ${itemCommon}
`;

const BoutiqueItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BoutiqueItemTitle = styled.div`
  position: absolute;
  height: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${(props) => props.background});
  background-size: 200%;
  background-position: 50%;
  background: rgba(0, 0, 0, .4);
  backdrop-filter: blur(10px);
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoutiqueItemMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 70px;
  opacity: 1;
  transition: all .5s;
  background: transparent;
  &:hover {
    background: #000;
    opacity: .4;
  }
`;

const SpanTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  padding: 0 20px;
  > *{
    margin-right: 4px;
  }
`;

const DjprogramListStyle = styled.div`
  ${listCommon}
  grid-template-columns: repeat(${(props) => props.length}, 186px);
  height: ${(props) => props.height || 'auto'};
`;

const DjprogramItem = styled.div`
  ${itemCommon}
`;

const DjprogramItemImgWrapper = styled.div`
  width: 100%;
  height: 186px;
  margin-bottom: 10px;
  position: relative;
`;

const DjprogramItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const DjprogramItemImgMask = styled.div`
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transition: all .5s;
  background: transparent;
  &:hover {
    background: #000;
    opacity: .4;
  }
`;

const DjprogramItemDesc = styled.div`
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
`;

const DjprogramItemSongName = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DjprogramItemDjDesc = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
`;

const NewSongListStyle = styled.div`
  display: grid;
  grid-template-columns: 310px 310px 310px;
  grid-template-rows: 60px 60px 60px;
  justify-content: space-between;
  grid-template-areas:  'a b c'
                        'd e f'
                        'g h i';
  position: relative;
  height: ${(props) => props.height || 'auto'};
`;

const NewSongItemImgMask = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: all .5s;
  background: rgba(0, 0, 0, .4);
`;

const NewSongItemAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  font-size: 20px;
  opacity: 0;
  >ion-icon {
    cursor: pointer;
    &:active {
      color: grey;
    }
  }
`;

const NewSongItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: .5px solid rgba(0, 0, 0, .1);
  &:hover {
    ${NewSongItemImgMask} {
      opacity: 1;
    }
    ${NewSongItemAdd} {
      opacity: 1;
    }
  }
`;

const NewSongItemImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 10px;
  position: relative;
`;

const NewSongItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NewSongItemDesc = styled.div`
  flex: 1;
`;

const NewSongItemName = styled.div`
  font-size: 14px;
  margin-bottom: 2px;
`;

const NewSongItemArtist = styled.div`
  font-size: 12px;
  font-weight: 300;
`;

export {
  BoutiqueListStyle,
  BoutiqueItem,
  BoutiqueItemImg,
  BoutiqueItemTitle,
  SpanTitle,
  BoutiqueItemMask,
  DjprogramListStyle,
  DjprogramItem,
  DjprogramItemImgWrapper,
  DjprogramItemImg,
  DjprogramItemDesc,
  DjprogramItemSongName,
  DjprogramItemDjDesc,
  DjprogramItemImgMask,
  NewSongListStyle,
  NewSongItem,
  NewSongItemImgWrapper,
  NewSongItemImg,
  NewSongItemDesc,
  NewSongItemAdd,
  NewSongItemName,
  NewSongItemArtist,
  NewSongItemImgMask,
};
