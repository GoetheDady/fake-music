import { useNavigate } from 'react-router-dom';
import {
  BoutiqueListStyle, BoutiqueItem, BoutiqueItemImg,
  BoutiqueItemTitle, SpanTitle, BoutiqueItemMask,
} from './style';
import Loading from '../../../components/loading';
import { calculatePlayCount } from '../../../utils';
import { useLazyImg } from '../../../hooks';

function BoutiqueList(props) {
  const { list = [] } = props;
  const navigate = useNavigate();
  const showList = useLazyImg(list.map((item) => item.picUrl || item.coverImgUrl));

  return (
    <BoutiqueListStyle height="284px" length={list.length}>
      {
        showList && list.length !== 0 ? list.map((item) => (
          <BoutiqueItem
            key={item.id}
            onClick={() => {
              navigate(`/songListDetail/${item.id}`);
            }}
          >
            <BoutiqueItemImg src={item.picUrl || item.coverImgUrl} />
            <BoutiqueItemTitle background={item.picUrl}>
              <SpanTitle>{item.name}</SpanTitle>
              <SpanTitle>
                <ion-icon name="play-outline" />
                {calculatePlayCount(item.playCount)}
              </SpanTitle>
            </BoutiqueItemTitle>
            <BoutiqueItemMask />
          </BoutiqueItem>
        )) : <Loading />
      }
    </BoutiqueListStyle>
  );
}

export default BoutiqueList;
