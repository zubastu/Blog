import { Action, ActionCreator, combineReducers, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TApplicationActions, TStore } from '../../types/types';
import { topicReducer } from './topicsReducer';
export const rootReducer = combineReducers({
  topics: topicReducer,
});

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, TStore, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
