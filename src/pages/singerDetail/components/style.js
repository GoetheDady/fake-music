import styled from 'styled-components';

export const MvListStyle = styled.div`
  display: grid;
  grid-column-gap: 20px;
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  grid-template-columns: repeat(10, 240px);
  position: relative;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

export const MvListItem = styled.div`
  width: 100%;
  flex-shrink: 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
`;

export const ImgMaskWrapper = styled.div`
  width: 100%;
  height: 140px;
  margin-bottom: 5px;
  position: relative;
`;

export const ImgMask = styled.div`
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

export const ItemPlayCount = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  align-items: center;
`;

export const ItemDuration = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;

export const MvListItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SingerDescStyle = styled.div`
  position: relative;
  background-color: rgba(155, 178, 210, .4);
  padding: 30px;
`;

export const SingerDescTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const SingerDescContent = styled.div`
  font-size: 14px;
  line-height: 20px;
`;
