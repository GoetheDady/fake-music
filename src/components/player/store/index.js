import _findIndex from 'lodash/findIndex';
import { setNewSongAndIndex } from '../DB';

export const constants = {
  PLAYER_INIT_DATA: 'PLAYER_INIT_DATA',
  PLAYER_CHANGE_PLAYING: 'PLAYER_CHANGE_PLAYING',
  PLAYER_ADD_SONG_AND_PLAY: 'PLAYER_ADD_SONG_AND_PLAY',
  PLAYER_PLAY_NEXT_SONG: 'PLAYER_PLAY_NEXT_SONG',
  PLAYER_PLAY_PREV_SONG: 'PLAYER_PLAY_PREV_SONG',
};

const store = {
  playList: [],
  currentPlayIndex: 0,
  playing: false,
};

export const reducer = (state = store, action) => {
  const { payload } = action;
  const { playList, currentPlayIndex } = state;
  switch (action.type) {
    case constants.PLAYER_INIT_DATA: {
      return {
        ...state,
        ...payload,
      };
    }
    case constants.PLAYER_ADD_SONG_AND_PLAY: {
      const { item } = payload;
      const findIndex = _findIndex(playList, (o) => o.id === item.id);
      if (findIndex < 0) {
        const newList = [...state.playList, item];
        setNewSongAndIndex(newList, newList.length - 1);
        return {
          ...state,
          playList: newList,
          currentPlayIndex: newList.length - 1,
          playing: true,
        };
      }
      setNewSongAndIndex(state.playList, findIndex);
      return {
        ...state,
        currentPlayIndex: findIndex,
        playing: true,
      };
    }
    case constants.PLAYER_CHANGE_PLAYING: {
      return {
        ...state,
        playing: payload.playing,
      };
    }
    case constants.PLAYER_PLAY_NEXT_SONG: {
      const { length } = playList;
      if (currentPlayIndex === length - 1) {
        return {
          ...state,
          currentPlayIndex: 0,
        };
      }
      return {
        ...state,
        currentPlayIndex: currentPlayIndex + 1,
      };
    }
    case constants.PLAYER_PLAY_PREV_SONG: {
      const { length } = playList;
      if (currentPlayIndex === 0) {
        return {
          ...state,
          currentPlayIndex: length - 1,
        };
      }
      return {
        ...state,
        currentPlayIndex: currentPlayIndex - 1,
      };
    }
    default: {
      return { ...state };
    }
  }
};
