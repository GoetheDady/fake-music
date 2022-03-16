import { useNavigate } from 'react-router-dom';
import { SiderStyle, SiderHeader, SpanIcon } from './style';
import HandleContent from '../handleContent';
import Player from '../player';

function Sider() {
  const navigate = useNavigate();
  return (
    <SiderStyle>
      <SiderHeader>
        <SpanIcon onClick={() => { navigate(-1); }}>
          <ion-icon name="chevron-back-outline" />
        </SpanIcon>
        <SpanIcon onClick={() => { navigate(1); }}>
          <ion-icon name="chevron-forward-outline" />
        </SpanIcon>
      </SiderHeader>
      <HandleContent />
      <Player />
    </SiderStyle>
  );
}

export default Sider;
