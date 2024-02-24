import { store } from '../services/store';
import { TTopicsActions } from '../services/actions/topicsActions';

export type TStore = ReturnType<typeof store.getState>;

export type TTopicProps = {
  title: string;
  body: string;
  image: string;
  likesCount: number;
  dislikesCount: number;
};

export type TReactionsProps = {
  likesCount: number;
  dislikesCount: number;
  isLiked?: boolean;
  isDisliked?: boolean;
};

export type TSearchForm = {
  title: string;
};

export type TTopicResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TTopic = TTopicResponse & {
  likesCount: number;
  dislikesCount: number;
  image: string;
};

export type TTopicItemProps = Omit<TTopicProps, 'subtitle'>;

export type TApplicationActions = TTopicsActions;
