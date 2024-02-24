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
  TOPIC_BY_ID_SUCCESS,
  TTopicsActions,
} from '../actions/topicsActions';

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
    case TOPIC_BY_ID_SUCCESS:
      return {
        ...state,
        isError: false,
        isRequest: false,
        topicById: action.payload,
      };

    default:
      return state;
  }
};
