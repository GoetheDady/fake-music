import {
  SingerDescStyle, SingerDescTitle, SingerDescContent,
} from './style';

function SingerDesc({ artics }) {
  return (
    <SingerDescStyle>
      <SingerDescTitle>
        โ
        {artics.name}
        โ็ฎไป
      </SingerDescTitle>
      <SingerDescContent>
        {artics.briefDesc}
      </SingerDescContent>
    </SingerDescStyle>
  );
}

export default SingerDesc;
