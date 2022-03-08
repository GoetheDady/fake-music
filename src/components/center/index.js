import {
  CenterWrapper, ContentWrapper, SiderWrapper, ContentHeader,
} from './style';
import Sider from '../sider';
import Routers from '../../routers';
import NavTop from '../navTop';

function Content() {
  return (
    <CenterWrapper>
      <ContentWrapper>
        {/* 侧边栏 */}
        <SiderWrapper>
          <Sider />
        </SiderWrapper>
        {/* 右边显示区域 */}
        <ContentWrapper direction="column">
          <ContentHeader>
            <NavTop />
          </ContentHeader>
          <ContentWrapper>
            <Routers />
          </ContentWrapper>
        </ContentWrapper>
      </ContentWrapper>
    </CenterWrapper>
  );
}

export default Content;
