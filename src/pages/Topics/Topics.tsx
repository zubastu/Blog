import styles from './styles.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import MainTopic from '../../components/MainTopic/MainTopic';
import TopicItem from '../../components/TopicItem/TopicItem';
import { useAppDispatch, useAppSelector } from '../../types/types';
import { topicBackLinkTextContent } from '../../constants/textContentConstants';
import { SEARCH_TOPICS_RESET } from '../../services/actions/topicsActions';

const Topics = () => {
  const dispatch = useAppDispatch();
  const { topicList, searchTopicList, hasRequest, isRequest } = useAppSelector(
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
  const showMainTopicFromList = !isRequest && !hasRequest && mainTopic;
  const showMainTopicFromSearchList =
    !isRequest && hasRequest && mainSearchTopic;
  const showOtherTopicsFromMainList = !isRequest && !hasRequest && otherTopics;
  const showOtherTopicsFromSearchList =
    !isRequest && hasRequest && otherSearchTopics;
  return (
    <section className={styles.main}>
      <SearchForm />

      {showMainTopicFromList && (
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

      {showMainTopicFromSearchList ? (
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
        !isRequest &&
        hasRequest && <p className={styles.noResultsText}>Нет совпадений</p>
      )}

      <ul className={styles.topicList}>
        {showOtherTopicsFromMainList &&
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
        {showOtherTopicsFromSearchList &&
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
      {!isRequest && hasRequest && (
        <button className={styles.resetButton} onClick={handleResetSearch}>
          {topicBackLinkTextContent}
        </button>
      )}
    </section>
  );
};

export default Topics;
