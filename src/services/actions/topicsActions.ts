import { TTopic, TReactionsProps } from '../../types/types';

export const GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST';

export const GET_TOPICS_ERROR = 'GET_TOPICS_ERROR';

export const GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS';

export const SEARCH_TOPICS_REQUEST = 'SEARCH_TOPICS_REQUEST';
export const SEARCH_TOPICS_SUCCESS = 'SEARCH_TOPICS_SUCCESS';
export const SEARCH_TOPICS_ERROR = 'SEARCH_TOPICS_ERROR';

export const SEARCH_TOPICS_RESET = 'SEARCH_TOPICS_RESET';

export const TOPIC_BY_ID_REQUEST = 'TOPIC_BY_ID_REQUEST';
export const SET_TOPIC_BY_ID = 'SET_TOPIC_BY_ID';
export const TOPIC_BY_ID_ERROR = 'TOPIC_BY_ID_ERROR';

export const UPDATE_REACTIONS = 'UPDATE_REACTIONS';

export type TTopicByIdRequest = {
  readonly type: typeof TOPIC_BY_ID_REQUEST;
};

export type TTopicByIdSuccess = {
  readonly type: typeof SET_TOPIC_BY_ID;
  readonly payload: TTopic;
};

export type TTopicByIdError = {
  readonly type: typeof TOPIC_BY_ID_ERROR;
};

export type TGetTopicsRequest = {
  readonly type: typeof GET_TOPICS_REQUEST;
};

export type TGetTopicsSuccess = {
  readonly type: typeof GET_TOPICS_SUCCESS;
  readonly payload: TTopic[];
};

export type TGetTopicsError = {
  readonly type: typeof GET_TOPICS_ERROR;
};

export type TSearchTopicsRequest = {
  readonly type: typeof SEARCH_TOPICS_REQUEST;
};

export type TSearchTopicsSuccess = {
  readonly type: typeof SEARCH_TOPICS_SUCCESS;
  readonly payload: TTopic[];
};

export type TSearchTopicsError = {
  readonly type: typeof SEARCH_TOPICS_ERROR;
};

export type TSearchTopicReset = {
  readonly type: typeof SEARCH_TOPICS_RESET;
};
export type TUpdateReactions = {
  readonly type: typeof UPDATE_REACTIONS;
  payload: TReactionsProps;
};

export type TTopicsActions =
  | TGetTopicsRequest
  | TGetTopicsSuccess
  | TGetTopicsError
  | TSearchTopicsSuccess
  | TSearchTopicsError
  | TSearchTopicsRequest
  | TTopicByIdRequest
  | TTopicByIdError
  | TTopicByIdSuccess
  | TSearchTopicReset
  | TUpdateReactions;
