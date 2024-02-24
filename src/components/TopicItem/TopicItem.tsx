import styles from './styles.module.scss';
import { TTopicProps } from '../MainTopic/MainTopic';
import Reactions from '../Reactions/Reactions';
import TopicReadButton from '../TopicReadButton/TopicReadButton';
import { topicButtonReadTextContent } from '../../constants/textContentConstants';

type TTopicItemProps = Omit<TTopicProps, 'subtitle'>;

const TopicItem: React.FC<TTopicItemProps> = ({
  image,
  title,
  likesCount,
  dislikesCount,
}) => {
  return (
    <li className={styles.topicContainer}>
      <img className={styles.topicImage} src={image} alt="Картинка топика" />

      <div className={styles.topicContentContainer}>
        <h3 className={styles.topicTitle}>{title}</h3>

        <div className={styles.topicButtonContainer}>
          <Reactions dislikesCount={likesCount} likesCount={dislikesCount} />
          <TopicReadButton text={topicButtonReadTextContent} />
        </div>
      </div>
    </li>
  );
};

export default TopicItem;
