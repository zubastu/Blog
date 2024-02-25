import styles from './styles.module.scss';
import Reactions from '../Reactions/Reactions';
import TopicReadButton from '../TopicReadButton/TopicReadButton';
import { topicButtonReadTextContent } from '../../constants/textContentConstants';
import { TTopicItemProps } from '../../types/types';
import { useNavigate } from 'react-router';

const TopicItem: React.FC<TTopicItemProps> = ({
  image,
  title,
  likesCount,
  dislikesCount,
  id,
  isSearchList = false,
  isLiked,
  isDisliked,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/topic/${id}`, { state: { isSearchList } });
  };

  return (
    <li className={styles.topicContainer}>
      <img className={styles.topicImage} src={image} alt="Картинка топика" />

      <div className={styles.topicContentContainer}>
        <h3 className={styles.topicTitle}>{title}</h3>

        <div className={styles.topicButtonContainer}>
          <Reactions
            dislikesCount={dislikesCount}
            likesCount={likesCount}
            isSearchList={isSearchList}
            isDisliked={isDisliked}
            isLiked={isLiked}
            id={id}
          />
          <TopicReadButton
            text={topicButtonReadTextContent}
            handleClick={handleClick}
          />
        </div>
      </div>
    </li>
  );
};

export default TopicItem;
