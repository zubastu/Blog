import styles from './styles.module.scss';
import Reactions from '../Reactions/Reactions';
import TopicReadButton from '../TopicReadButton/TopicReadButton';
import { topicButtonReadTextContent } from '../../constants/textContentConstants';
import { TTopicItemProps } from '../../types/types';

const TopicItem: React.FC<TTopicItemProps> = ({
  image,
  title,
  likesCount,
  dislikesCount,
  id,
  isSearchList = false,
}) => {
  return (
    <li className={styles.topicContainer}>
      <img className={styles.topicImage} src={image} alt="Картинка топика" />

      <div className={styles.topicContentContainer}>
        <h3 className={styles.topicTitle}>{title}</h3>

        <div className={styles.topicButtonContainer}>
          <Reactions
            dislikesCount={likesCount}
            likesCount={dislikesCount}
            isSearchList={isSearchList}
            id={id}
          />
          <TopicReadButton
            text={topicButtonReadTextContent}
            id={id}
            isSearchList={isSearchList}
          />
        </div>
      </div>
    </li>
  );
};

export default TopicItem;
