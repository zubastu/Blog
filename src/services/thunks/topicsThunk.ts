import { topicsAPI } from '../../api/topicsAPI';
import {
  GET_TOPICS_REQUEST,
  TOPIC_BY_ID_REQUEST,
  SEARCH_TOPICS_REQUEST,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
  TOPIC_BY_ID_ERROR,
  SEARCH_TOPICS_ERROR,
  SET_TOPIC_BY_ID,
  SEARCH_TOPICS_SUCCESS,
} from '../actions/topicsActions';
import { getRandomImage, getRandomNumber } from '../../utils/utils';
import { AppThunk, TTopic, TTopicResponse } from '../../types/types';

const { searchTopic, getTopics, getTopicById } = topicsAPI();

export const thunkGetTopicList: AppThunk = () => async (dispatch) => {
  dispatch({ type: GET_TOPICS_REQUEST });
  try {
    const topicList = await getTopics();
    const newTopics = topicList?.map((topic: TTopicResponse): TTopic => {
      return {
        ...topic,
        likesCount: getRandomNumber(0, 50),
        dislikesCount: getRandomNumber(0, 50),
        image: getRandomImage(),
        isLiked: false,
        isDisliked: false,
      };
    });
    dispatch({ type: GET_TOPICS_SUCCESS, payload: newTopics });
  } catch (e) {
    dispatch({ type: GET_TOPICS_ERROR });
  } finally {
  }
};

export const thunkGetTopicByd: AppThunk = (id: string) => async (dispatch) => {
  dispatch({ type: TOPIC_BY_ID_REQUEST });
  try {
    const data = await getTopicById(id);
    const topic: TTopic = {
      ...data,
      likesCount: getRandomNumber(0, 50),
      dislikesCount: getRandomNumber(0, 50),
      image: getRandomImage(),
    };
    dispatch({ type: SET_TOPIC_BY_ID, payload: topic });
  } catch (e) {
    dispatch({ type: TOPIC_BY_ID_ERROR });
  } finally {
  }
};

export const thunkSearchTopics: AppThunk =
  (value: string) => async (dispatch) => {
    dispatch({ type: SEARCH_TOPICS_REQUEST });
    try {
      const topicsSearchResult = await searchTopic(value);
      const newTopics = topicsSearchResult?.map(
        (topic: TTopicResponse): TTopic => {
          return {
            ...topic,
            likesCount: getRandomNumber(0, 50),
            dislikesCount: getRandomNumber(0, 50),
            image: getRandomImage(),
            isLiked: false,
            isDisliked: false,
          };
        },
      );
      dispatch({ type: SEARCH_TOPICS_SUCCESS, payload: newTopics });
    } catch (e) {
      dispatch({ type: SEARCH_TOPICS_ERROR });
    } finally {
    }
  };
