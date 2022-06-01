import { useSelector, useDispatch } from 'react-redux';
import {
  NewSongListStyle, NewSongItem, NewSongItemImgWrapper,
  NewSongItemDesc, NewSongItemAdd, NewSongItemImg, NewSongItemName,
  NewSongItemArtist, NewSongItemImgMask,
} from './style';
import { constants } from '../../../components/player/store';

function NewSongList(props) {
  const { list = [], type = '' } = props;
  const dispatch = useDispatch();

  const playCurrentSong = (item) => {
    dispatch({
      type: constants.PLAYER_ADD_SONG_AND_PLAY,
      payload: {
        item,
      },
    });
  };
  return (
    <NewSongListStyle height="180px">
      {
        list.map((item) => (
          <NewSongItem key={item.id} onDoubleClick={() => { playCurrentSong(item); }}>
            <NewSongItemImgWrapper>
              <NewSongItemImg src={type === 'singer' ? item.al?.picUrl : item.picUrl} />
              <NewSongItemImgMask>
                <ion-icon name="play" />
              </NewSongItemImgMask>
            </NewSongItemImgWrapper>
            <NewSongItemDesc>
              <NewSongItemName>{item.name}</NewSongItemName>
              <NewSongItemArtist>
                {
                  type === 'singer'
                    ? item.al.name
                    : item.song.artists.map((i) => i.name).join('/')
                }
              </NewSongItemArtist>
            </NewSongItemDesc>
            <NewSongItemAdd>
              <ion-icon name="add-outline" />
            </NewSongItemAdd>
          </NewSongItem>
        ))
      }
    </NewSongListStyle>
  );
}

export default NewSongList;
