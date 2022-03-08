import styled from 'styled-components';
import { Mask } from '../maskCover/style';

export const ListStyle = styled.div`
  width: 100%;
  font-size: 14px;
  min-height: 370px;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
`;

export const ListHeaderItem = styled.div`
  display: flex;
  padding-left: 10px;
  border-right: 1px solid #9BB2D2;
  box-sizing: border-box;
  &:last-child {
    border-right: none;
    justify-content: center;
    flex: 1;
  }
  &:nth-child(1) {
    width: 350px;
  }
  &:nth-child(2) {
    width: 250px;
  }
  &:nth-child(3) {
    width: 250px;
  }
`;

export const ListBody = styled.div`
`;

export const ListItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 8px;
  &:nth-child(odd) {
    background-color: rgba(155, 178, 210, .2);
  }
  &:hover {
    background-color: rgba(155, 178, 210, .4);
    ${Mask} {
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
      display: flex;
      opacity: 1;
    }
  }
`;

export const ListItemOptions = styled.div`
  display: flex;
  padding-left: 10px;
  box-sizing: border-box;
  height: 54px;
  align-items: center;
  &:last-child {
    justify-content: center;
    flex: 1;
  }
  &:nth-child(1) {
    width: 350px;
  }
  &:nth-child(2) {
    width: 250px;
  }
  &:nth-child(3) {
    width: 250px;
  }
`;

export const ListItemOptionsImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  object-fit: cover;
`;

export const ListItemOptionsItem = styled.span`
  flex: 1;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
