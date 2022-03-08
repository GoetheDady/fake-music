import styled from 'styled-components';

export const SingerDetailStyle = styled.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;
export const SingerDetailTop = styled.div`
  width: 100%;
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(155, 178, 210, .4);
`;

export const SingerDetailAvatar = styled.img`
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 85px;
  box-shadow: 0 2px 10px grey;
`;

export const DetailAvatarBottom = styled.div`
  position: absolute;
  left: 30px;
  bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  * {
    margin-right: 5px;
  }
`;

export const SingerDetailBottom = styled.div`
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
`;

export const DetailBottomTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: 14px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(155, 178, 210, .4);
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const DetailBottomSubTitle = styled.div`
  font-size: 14px;
  color: rgba(155, 178, 210);
  cursor: default;
  user-select: none;
`;
