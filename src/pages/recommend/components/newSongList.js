import {
  NewSongListStyle, NewSongItem, NewSongItemImgWrapper,
  NewSongItemDesc, NewSongItemAdd, NewSongItemImg, NewSongItemName,
  NewSongItemArtist, NewSongItemImgMask,
} from './style';
import Loading from '../../../components/loading';

function NewSongList(props) {
  const { list = [], type = '' } = props;
  return (
    <NewSongListStyle height="180px">
      {
        list.length === 0 ? <Loading /> : list.map((item) => (
          <NewSongItem key={item.id}>
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
