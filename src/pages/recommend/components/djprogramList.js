import {
  DjprogramListStyle, DjprogramItem, DjprogramItemImgWrapper,
  DjprogramItemImg, DjprogramItemDesc, DjprogramItemSongName,
  DjprogramItemDjDesc, DjprogramItemImgMask,
} from './style';
import Loading from '../../../components/loading';

function DjprogramList(props) {
  const { list = [], type = '', length = 6 } = props;
  return (
    <DjprogramListStyle height="228px" length={length}>
      {
        list.length === 0 ? <Loading /> : list.map((item) => (
          <DjprogramItem key={item.id}>
            <DjprogramItemImgWrapper>
              <DjprogramItemImg src={type === 'singer' ? item.blurPicUrl : item.picUrl} />
              <DjprogramItemImgMask />
            </DjprogramItemImgWrapper>
            <DjprogramItemDesc>
              <DjprogramItemSongName>{item.name}</DjprogramItemSongName>
              <DjprogramItemDjDesc>
                {type === 'singer' ? item.desciption : item.program.dj.nickname}
              </DjprogramItemDjDesc>
            </DjprogramItemDesc>
          </DjprogramItem>
        ))
      }
    </DjprogramListStyle>
  );
}

export default DjprogramList;
