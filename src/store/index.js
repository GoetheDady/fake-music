import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as SearchStore } from '../pages/search/store';
import { reducer as PlayStore } from '../components/player/store';

const rootReducer = combineReducers({
  SearchStore,
  PlayStore,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
