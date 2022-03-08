import styled from 'styled-components';

const IconStyle = styled.span`
  font-size: ${(props) => props.data.fontSize};
  color: ${(props) => props.data.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2px;
`;

function Icon(props) {
  const { name, fontSize = '14px', color = '#fff' } = props;
  return (
    <IconStyle data={{
      fontSize,
      color,
    }}
    >
      <ion-icon name={name} />
    </IconStyle>
  );
}

export default Icon;
