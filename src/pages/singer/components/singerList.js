import { useNavigate } from 'react-router-dom';
import {
  SingerListStyle, SingerListItem, ListItemImg, ListItemInfo, ListItemName,
} from './style';
import Icon from '../../../components/icon';

function SingerList({ list }) {
  const navigate = useNavigate();

  return (
    <SingerListStyle>
      {
        list.map((item) => (
          <SingerListItem
            key={item.id}
            onClick={() => {
              navigate(`/singerDetail/${item.id}`);
            }}
          >
            <ListItemImg src={item.img1v1Url} />
            <ListItemInfo>
              <ListItemName>{item.name}</ListItemName>
              {
                item.accountId && <Icon name="person-circle" fontSize="16px" color="#9BB2D2" />
              }
            </ListItemInfo>
          </SingerListItem>
        ))
      }
    </SingerListStyle>
  );
}

export default SingerList;
