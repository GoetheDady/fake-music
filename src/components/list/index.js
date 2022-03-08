import {
  ListStyle, ListHeader, ListHeaderItem, ListBody, ListItem, ListItemOptions,
  ListItemOptionsItem, ListItemOptionsImg,
} from './style';
import Icon from '../icon';
import { formatDuration } from '../../utils';
import MaskCover from '../maskCover';

function List(props) {
  const { list: songList = [] } = props;
  return (
    <ListStyle>
      <ListHeader>
        <ListHeaderItem>歌曲</ListHeaderItem>
        <ListHeaderItem>艺人</ListHeaderItem>
        <ListHeaderItem>专辑</ListHeaderItem>
        <ListHeaderItem>
          <Icon name="time-outline" fontSize="16px" />
        </ListHeaderItem>
      </ListHeader>
      <ListBody>
        {
          songList.map((item) => (
            <ListItem key={item.id}>
              <ListItemOptions>
                <MaskCover
                  style={{ 'margin-right': '10px' }}
                  maskContent={
                    <Icon name="play" fontSize="18px" />
                  }
                >
                  <ListItemOptionsImg src={item.al.picUrl} />
                </MaskCover>
                <ListItemOptionsItem>
                  {item.name}
                </ListItemOptionsItem>
              </ListItemOptions>
              <ListItemOptions>
                <ListItemOptionsItem>
                  {item.ar.map((ar) => ar.name).join('/')}
                </ListItemOptionsItem>
              </ListItemOptions>
              <ListItemOptions>
                <ListItemOptionsItem>
                  {item.al.name}
                </ListItemOptionsItem>
              </ListItemOptions>
              <ListItemOptions>
                <Icon name="add" fontSize="20px" />
                {formatDuration(item.dt)}
              </ListItemOptions>
            </ListItem>
          ))
        }
      </ListBody>
    </ListStyle>
  );
}

export default List;
