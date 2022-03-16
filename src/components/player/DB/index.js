import localforage from 'localforage';

export const constants = {
  PLAY_DB: 'PLAY_DB',
};

export const setNewSongAndIndex = (list, index) => {
  localforage.setItem(constants.PLAY_DB, {
    playList: list,
    currentPlayIndex: index,
  });
};
