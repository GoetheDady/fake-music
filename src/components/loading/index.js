import { LoadingStyle, LoadingSpan } from './style';

function Loading() {
  return (
    <LoadingStyle>
      <LoadingSpan>
        <ion-icon name="reload" />
      </LoadingSpan>
      正在加载...
    </LoadingStyle>
  );
}

export default Loading;
