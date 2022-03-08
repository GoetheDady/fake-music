const store = {
  keywords: '',
};

export const constants = {
  CHANGE_KEYWORDS: 'SEARCH_CHANGE_KEYWORDS',
};

export const reducer = (state = store, action) => {
  switch (action.type) {
    case constants.CHANGE_KEYWORDS:
      return {
        ...state,
        keywords: action.payload,
      };
    default:
      return { ...state };
  }
};
