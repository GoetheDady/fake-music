import styled from 'styled-components';

export const SongListDetailStyle = styled.div`
  width: 100%;
  padding: 30px;
  overflow: auto;
`;

export const DetailDesc = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;

export const DetailImg = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 10px grey;
  margin-right: 35px;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
`;

export const DetailInfoBtns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailInfoBtnsLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background-color: rgba(155, 178, 210, .2);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: rgba(155, 178, 210, .6);
  }
`;

export const DetailInfoBtnsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  background-color: rgba(155, 178, 210, .2);
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(155, 178, 210, .6);
  }
`;

export const DetailInfoTitle = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const DetailInfoSubtitle = styled.div`
  font-size: 20px;
  color: rgba(155, 178, 210, 1);
  margin-bottom: 100px;
`;

export const BottomLoading = styled.div`
  position: relative;
  height: 40px;
`;
