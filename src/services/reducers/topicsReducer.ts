import {
  GET_TOPICS_ERROR,
  GET_TOPICS_REQUEST,
  GET_TOPICS_SUCCESS,
  SEARCH_TOPICS_ERROR,
  SEARCH_TOPICS_REQUEST,
  SEARCH_TOPICS_RESET,
  SEARCH_TOPICS_SUCCESS,
  TOPIC_BY_ID_ERROR,
  TOPIC_BY_ID_REQUEST,
  SET_TOPIC_BY_ID,
  TTopicsActions,
  UPDATE_REACTIONS,
} from '../actions/topicsActions';
import { TTopic } from '../../types/types';

const initialState = {
  isRequest: false,
  isError: false,
  hasRequest: false,
  topicList: [],
  searchTopicList: [],
  topicById: {
    userId: 0,
    id: 0,
    title: '',
    body: '',
    likesCount: 0,
    dislikesCount: 0,
    image: '',
  },
};

export const topicReducer = (state = initialState, action: TTopicsActions) => {
  switch (action.type) {
    case GET_TOPICS_REQUEST:
      return { ...state, isError: false, isRequest: true };
    case GET_TOPICS_ERROR:
      return { ...state, isError: true, isRequest: false };
    case GET_TOPICS_SUCCESS:
      return {
        ...state,
        isError: false,
        isRequest: false,
        topicList: action.payload,
      };

    case SEARCH_TOPICS_ERROR:
      return { ...state, isError: true, isRequest: false };
    case SEARCH_TOPICS_REQUEST:
      return { ...state, isError: false, isRequest: true, hasRequest: true };
    case SEARCH_TOPICS_SUCCESS:
      return {
        ...state,
        isError: false,
        isRequest: false,
        searchTopicList: action.payload,
      };

    case SEARCH_TOPICS_RESET:
      return { ...state, isError: true, isRequest: false, hasRequest: false };

    case TOPIC_BY_ID_ERROR:
      return { ...state, isError: true, isRequest: false };
    case TOPIC_BY_ID_REQUEST:
      return { ...state, isError: false, isRequest: true };
    case SET_TOPIC_BY_ID:
      return {
        ...state,
        isError: false,
        isRequest: false,
        topicById: action.payload,
      };

    case UPDATE_REACTIONS:
      const list = action.payload.isSearchList
        ? state.searchTopicList
        : state.topicList;
      const topicList = list.map((topic: TTopic) => {
        return action.payload.id === topic.id
          ? {
              ...topic,
              likesCount: action.payload.likesCount,
              dislikesCount: action.payload.dislikesCount,
              isLiked: action.payload.isLiked,
              isDisliked: action.payload.isDisliked,
            }
          : topic;
      });
      return { ...state, topicList };

    default:
      return state;
  }
};
