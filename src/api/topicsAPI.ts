import { api } from './api';
import { API_URL } from '../constants/apiConstants';

const { fetchGet } = api();

export const topicsAPI = () => {
  const getTopics = () => {
    const url = `${API_URL}/posts`;
    return fetchGet(url);
  };

  const getTopicById = (id: string) => {
    const url = `${API_URL}/posts/${id}`;
    return fetchGet(url);
  };

  const searchTopic = (titleValue: string) => {
    const url = `${API_URL}/posts?title=${titleValue}`;
    return fetchGet(url);
  };

  return {
    getTopics,
    getTopicById,
    searchTopic,
  };
};
