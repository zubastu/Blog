import styles from './styles.module.scss';
import likeActive from '../../assets/images/active_like.svg';
import likeDisabled from '../../assets/images/disabled_like.svg';
import dislikeActive from '../../assets/images/active_dislike.svg';
import dislikeDisabled from '../../assets/images/disbled_dislike.svg';

const Reactions = () => {
  return (
    <div className={styles.container}>
      <button className={styles.reaction}></button>
      <button className={styles.reaction}></button>
    </div>
  );
};

export default Reactions;
