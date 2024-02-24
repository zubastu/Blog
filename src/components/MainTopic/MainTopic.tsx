import styles from './styles.module.scss';
import Reactions from '../Reactions/Reactions';
import TopicReadButton from '../TopicReadButton/TopicReadButton';
import { topicButtonReadTextContent } from '../../constants/textContentConstants';
import { TTopicProps } from '../../types/types';

const MainTopic: React.FC<TTopicProps> = ({
  title,
  image,
  body,
  dislikesCount,
  likesCount,
}) => {
  return (
    <section className={styles.topic}>
      <img className={styles.topicImage} src={image} alt="Картинка топика" />
      <div className={styles.topicTextContent}>
        <div className={styles.topicReactionsContainer}>
          <h2 className={styles.topicTitle}>{title}</h2>
          <Reactions dislikesCount={dislikesCount} likesCount={likesCount} />
        </div>
        <p className={styles.topicSubtitle}>{body}</p>

        <div className={styles.topicButtonContainer}>
          <TopicReadButton text={topicButtonReadTextContent} />
        </div>
      </div>
    </section>
  );
};

export default MainTopic;
