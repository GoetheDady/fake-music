import {
  SingerDescStyle, SingerDescTitle, SingerDescContent,
} from './style';

function SingerDesc({ artics }) {
  return (
    <SingerDescStyle>
      <SingerDescTitle>
        “
        {artics.name}
        ”简介
      </SingerDescTitle>
      <SingerDescContent>
        {artics.briefDesc}
      </SingerDescContent>
    </SingerDescStyle>
  );
}

export default SingerDesc;
