import { useNavigate } from 'react-router-dom';
import {
  BoutiqueListStyle, BoutiqueItem, BoutiqueItemImg,
  BoutiqueItemTitle, SpanTitle, BoutiqueItemMask,
} from './style';
import Loading from '../../../components/loading';
import { calculatePlayCount } from '../../../utils';

function BoutiqueList(props) {
  const { list = [] } = props;
  const navigate = useNavigate();
  return (
    <BoutiqueListStyle height="284px">
      {
        list.length === 0 ? <Loading /> : list.map((item) => (
          <BoutiqueItem
            key={item.id}
            onClick={() => {
              navigate(`/songListDetail/${item.id}`);
            }}
          >
            <BoutiqueItemImg src={item.picUrl} />
            <BoutiqueItemTitle background={item.picUrl}>
              <SpanTitle>{item.name}</SpanTitle>
              <SpanTitle>
                <ion-icon name="play-outline" />
                {calculatePlayCount(item.playCount)}
              </SpanTitle>
            </BoutiqueItemTitle>
            <BoutiqueItemMask />
          </BoutiqueItem>
        ))
      }
    </BoutiqueListStyle>
  );
}

export default BoutiqueList;
