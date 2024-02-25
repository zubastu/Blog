import styles from './styles.module.scss';
import { Link, useParams } from 'react-router-dom';
import { topicBackLinkTextContent } from '../../constants/textContentConstants';
import Reactions from '../../components/Reactions/Reactions';
import { useEffect, useState } from 'react';
import { TTopic, useAppDispatch, useAppSelector } from '../../types/types';
import { thunkGetTopicByd } from '../../services/thunks/topicsThunk';
import { useLocation } from 'react-router';

const Topic = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [topic, setTopic] = useState<TTopic>({
    body: '',
    dislikesCount: 0,
    id: 0,
    image: '',
    isDisliked: false,
    isLiked: false,
    likesCount: 0,
    title: '',
    userId: 0,
  });

  const { id } = useParams();

  const { topicList, searchTopicList, isRequest } = useAppSelector(
    (store) => store.topics,
  );

  useEffect(() => {
    const list = location?.state?.isSearchList ? searchTopicList : topicList;

    const currentTopic = list.find((topic) => topic.id === Number(id));
    if (currentTopic) {
      setTopic(currentTopic);
    } else {
      dispatch(thunkGetTopicByd(id));
    }

    console.log(topic);
  }, [id, topic]);

  return (
    <section className={styles.topicContainer}>
      {isRequest ? (
        <>Загрузка .....</>
      ) : (
        topic.title && (
          <>
            <div className={styles.container}>
              <Link to="/" className={styles.backLink}>
                {topicBackLinkTextContent}
              </Link>
              <Reactions
                id={topic?.id}
                dislikesCount={topic?.dislikesCount}
                isDisliked={topic?.isDisliked}
                isLiked={topic?.isLiked}
                likesCount={topic?.likesCount}
                isSearchList={location?.state?.isSearchList || false}
              />
            </div>

            <div className={styles.contentContainer}>
              <h2 className={styles.title}>{topic?.title}</h2>
              <img
                className={styles.image}
                src={topic?.image}
                alt="Картинка топика"
              />

              <p className={styles.textContent}>{topic?.body}</p>
            </div>
          </>
        )
      )}
    </section>
  );
};

export default Topic;
