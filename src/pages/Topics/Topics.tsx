import styles from './styles.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import MainTopic from '../../components/MainTopic/MainTopic';
import TopicItem from '../../components/TopicItem/TopicItem';
import { useAppDispatch, useAppSelector } from '../../types/types';
import { topicBackLinkTextContent } from '../../constants/textContentConstants';
import { SEARCH_TOPICS_RESET } from '../../services/actions/topicsActions';

const Topics = () => {
  const dispatch = useAppDispatch();
  const { topicList, searchTopicList, hasRequest } = useAppSelector(
    (store) => store.topics,
  );
  const mainTopic = topicList?.length > 0 ? topicList[0] : false;
  const otherTopics = topicList.length > 0 ? topicList?.slice(1) : false;

  const mainSearchTopic =
    searchTopicList && searchTopicList.length > 0 ? searchTopicList[0] : false;

  const otherSearchTopics =
    searchTopicList && searchTopicList.length > 1
      ? searchTopicList?.slice(1)
      : false;

  const handleResetSearch = () => {
    dispatch({ type: SEARCH_TOPICS_RESET });
  };

  return (
    <section className={styles.main}>
      <SearchForm />

      {!hasRequest && mainTopic && (
        <MainTopic
          title={mainTopic.title}
          body={mainTopic.body}
          image={mainTopic.image}
          likesCount={mainTopic.likesCount}
          dislikesCount={mainTopic.dislikesCount}
          isLiked={mainTopic.isLiked}
          isDisliked={mainTopic.isDisliked}
          id={mainTopic.id}
        />
      )}

      {hasRequest && mainSearchTopic ? (
        <MainTopic
          title={mainSearchTopic.title}
          body={mainSearchTopic.body}
          image={mainSearchTopic.image}
          likesCount={mainSearchTopic.likesCount}
          dislikesCount={mainSearchTopic.dislikesCount}
          isLiked={mainSearchTopic.isLiked}
          isDisliked={mainSearchTopic.isDisliked}
          id={mainSearchTopic.id}
          isSearchList={true}
        />
      ) : (
        hasRequest && <p className={styles.noResultsText}>Нет совпадений</p>
      )}

      <ul className={styles.topicList}>
        {!hasRequest &&
          otherTopics &&
          otherTopics?.map(
            ({
              image,
              id,
              likesCount,
              dislikesCount,
              title,
              body,
              isLiked,
              isDisliked,
            }) => (
              <TopicItem
                image={image}
                likesCount={likesCount}
                dislikesCount={dislikesCount}
                isLiked={isLiked}
                isDisliked={isDisliked}
                title={title}
                body={body}
                id={id}
                key={id}
              />
            ),
          )}
        {hasRequest &&
          otherSearchTopics &&
          otherSearchTopics?.map(
            ({
              image,
              id,
              likesCount,
              dislikesCount,
              title,
              body,
              isLiked,
              isDisliked,
            }) => (
              <TopicItem
                image={image}
                likesCount={likesCount}
                dislikesCount={dislikesCount}
                isLiked={isLiked}
                isDisliked={isDisliked}
                title={title}
                body={body}
                id={id}
                isSearchList={true}
                key={id}
              />
            ),
          )}
      </ul>
      {hasRequest && (
        <button className={styles.resetButton} onClick={handleResetSearch}>
          {topicBackLinkTextContent}
        </button>
      )}
    </section>
  );
};

export default Topics;
