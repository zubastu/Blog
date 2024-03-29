import styles from './styles.module.scss';
import Reactions from '../Reactions/Reactions';
import TopicReadButton from '../TopicReadButton/TopicReadButton';
import { topicButtonReadTextContent } from '../../constants/textContentConstants';
import { TTopicProps } from '../../types/types';
import { useNavigate } from 'react-router';

const MainTopic: React.FC<TTopicProps> = ({
  title,
  image,
  body,
  dislikesCount,
  likesCount,
  id,
  isLiked,
  isDisliked,
  isSearchList = false,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/topic/${id}`, { state: { isSearchList } });
  };
  return (
    <section className={styles.topic}>
      <img className={styles.topicImage} src={image} alt="Картинка топика" />
      <div className={styles.topicTextContent}>
        <div className={styles.topicReactionsContainer}>
          <h2 className={styles.topicTitle}>{title}</h2>
          <Reactions
            dislikesCount={dislikesCount}
            likesCount={likesCount}
            isLiked={isLiked}
            isDisliked={isDisliked}
            id={id}
            isSearchList={isSearchList}
          />
        </div>
        <p className={styles.topicSubtitle}>{body}</p>

        <div className={styles.topicButtonContainer}>
          <TopicReadButton
            text={topicButtonReadTextContent}
            handleClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default MainTopic;
