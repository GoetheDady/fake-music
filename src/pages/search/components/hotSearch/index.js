import styled from 'styled-components';
import { COLOR_ENUM } from './constants';
import Icon from '../../../../components/icon';

const HotSearchStyle = styled.div`
  width: 100%;
`;

const HotSearchTitle = styled.div`
  margin-bottom: 20px;
`;

const HotSearchList = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 23%);
  grid-row-gap: 20px;
`;

const ListItem = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  border-radius: 8px;
  background: linear-gradient(-45deg,
    ${(props) => props.background[0]},
    ${(props) => props.background[1]},
    ${(props) => props.background[2]}
  );
  overflow: hidden;
  user-select: none;
  cursor: pointer;
`;

const ListItemMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, .4), transparent, rgba(0, 0, 0, .4));
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4), rgba(0, 0, 0, .4));
  };
`;

function HotSearch({ list = [] }) {
  return (
    <HotSearchStyle>
      <HotSearchTitle>热门搜索</HotSearchTitle>
      <HotSearchList>
        {
          list.map((item, index) => (
            <ListItem key={item.searchWord} background={COLOR_ENUM[index % 7]}>
              <ListItemMask>
                {
                  index < 3 && <Icon name="flame" color="red" />
                }
                {item.searchWord}
              </ListItemMask>
            </ListItem>
          ))
        }
      </HotSearchList>
    </HotSearchStyle>
  );
}

export default HotSearch;
