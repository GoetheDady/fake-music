import { MaskCoverStyle, Mask } from './style';

function MaskCover(props) {
  const { children, style, maskContent } = props;
  return (
    <MaskCoverStyle {...style}>
      {children}
      <Mask>
        {maskContent}
      </Mask>
    </MaskCoverStyle>
  );
}

export default MaskCover;
