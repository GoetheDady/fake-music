import ReactDom, { createPortal } from 'react-dom';
import PopupWindow from '../components/popupWindow';

export const calculatePlayCount = (count) => {
  const countStr = count.toString();
  const { length } = countStr.split('');
  let num = '';
  if (length > 8) {
    num = `${countStr.slice(0, length - 8)}亿`;
  } else if (length > 4) {
    num = `${countStr.slice(0, length - 4)}万`;
  } else {
    num = `${count}`;
  }
  return num;
};

export const formatDuration = (time = 0) => {
  const s = Math.floor(time / 1000);
  let duration = '00:00';
  if (s < 60 && s > 0) {
    duration = `00:${s}`;
  } else {
    const remainM = {
      num: Math.floor(s / 60),
      length: (`${Math.floor(s / 60)}`).length,
    };
    const remainS = {
      num: s - remainM.num * 60,
      length: (`${s - remainM.num * 60}`).toString().length,
    };
    const mm = remainM.length <= 1 ? `0${remainM.num}` : `${remainM.num}`;
    const ss = remainS.length <= 1 ? `0${remainS.num}` : `${remainS.num}`;
    duration = `${mm}:${ss}`;
  }
  return duration;
};

export const message = (props) => {
  let div = document.querySelector('#popup-window');
  console.log('有没有pop', div);
  if (!div) {
    div = document.createElement('div');
    div.setAttribute('id', 'popup-window');
    document.body.appendChild(div);
  }

  const currentConfig = { ...props };

  const destroy = () => {
    const unmountResult = ReactDom.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  const render = (config) => {
    ReactDom.render(
      <PopupWindow destroy={destroy} {...config} />,
      div,
    );
  };

  render(currentConfig);
};
