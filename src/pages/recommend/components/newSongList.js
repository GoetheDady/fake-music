import {
  NewSongListStyle, NewSongItem, NewSongItemImgWrapper,
  NewSongItemDesc, NewSongItemAdd, NewSongItemImg, NewSongItemName,
  NewSongItemArtist, NewSongItemImgMask,
} from './style';
import Loading from '../../../components/loading';
import { useLazyImg } from '../../../hooks';

function NewSongList(props) {
  const { list = [], type = '' } = props;
  const imageList = list.map((item) => (type === 'singer' ? item.al?.picUrl : item.picUrl));
  const showList = useLazyImg(imageList);
  return (
    <NewSongListStyle height="180px">
      {
        (showList && list.length !== 0) ? list.map((item) => (
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
        )) : <Loading />
      }
    </NewSongListStyle>
  );
}

export default NewSongList;
