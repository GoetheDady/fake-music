import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as SearchStore } from '../pages/search/store';

const rootReducer = combineReducers({
  SearchStore,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
