import { combineReducers } from 'redux';

import { topicReducer } from './topicsReducer';
export const rootReducer = combineReducers({
  topics: topicReducer,
});
