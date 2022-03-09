const store = {
  keywords: '',
  enterDown: false,
  beginSearch: false,
  haveData: false,
  hotSearch: [],
  searchSinger: [],
  searchAlbum: [],
  searchSongs: [],
  searchSongsList: [],
  searchMvList: [],
};

export const constants = {
  CHANGE_KEYWORDS: 'SEARCH_CHANGE_KEYWORDS',
  ENTER_DOWN: 'SEARCH_ENTER_DOWN',
  BEGIN_SEARCH: 'SEARCH_BEGIN_SEARCH',
  CLEAR_DATA: 'SEARCH_CLEAR_DATA',

  SET_HOT_SEARCH: 'SET_HOT_SEARCH',
  SET_SEARCH_SINGER: 'SET_SEARCH_SINGER',
  SET_SEARCH_ALBUM: 'SET_SEARCH_ALBUM',
  SET_SEARCH_SONGS: 'SET_SEARCH_SONGS',

  SET_ALL_DATA: 'SET_ALL_DATA',
};

export const reducer = (state = store, action) => {
  switch (action.type) {
    case constants.CHANGE_KEYWORDS:
      return {
        ...state,
        keywords: action.payload,
      };
    case constants.BEGIN_SEARCH:
      if (action.payload) {
        return {
          ...state,
          beginSearch: action.payload,
        };
      }
      return {
        ...state,
        beginSearch: action.payload,
        haveData: !action.payload,
      };
    case constants.CLEAR_DATA:
      return {
        ...state,
        haveData: false,
      };

    case constants.SET_ALL_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case constants.SET_HOT_SEARCH:
      return {
        ...state,
        hotSearch: action.payload,
      };
    case constants.SET_SEARCH_SINGER:
      return {
        ...state,
        searchSinger: action.payload,
      };
    case constants.SET_SEARCH_ALBUM:
      return {
        ...state,
        searchAlbum: action.payload,
      };
    case constants.SET_SEARCH_SONGS:
      return {
        ...state,
        searchSongs: action.payload,
      };
    default:
      return { ...state };
  }
};
