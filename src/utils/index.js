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

export const formatDuration = (time) => {
  const s = Math.floor(time / 1000);
  let duration = '';
  if (s < 60) {
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
