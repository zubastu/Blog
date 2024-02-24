import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { topicBackLinkTextContent } from '../../constants/textContentConstants';
import Reactions from '../../components/Reactions/Reactions';
import { getRandomImage, getRandomNumber } from '../../utils/utils';

const Topic = () => {
  return (
    <section className={styles.topicContainer}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          {topicBackLinkTextContent}
        </Link>
        <Reactions
          dislikesCount={getRandomNumber(0, 50)}
          isDisliked={false}
          isLiked={false}
          likesCount={getRandomNumber(0, 50)}
        />
      </div>

      <div className={styles.contentContainer}>
        <h2 className={styles.title}></h2>
        <img
          className={styles.image}
          src={getRandomImage()}
          alt="Картинка топика"
        />

        <p className={styles.textContent}></p>
      </div>
    </section>
  );
};

export default Topic;
