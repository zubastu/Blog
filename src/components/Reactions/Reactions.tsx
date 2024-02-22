import styles from './styles.module.scss';
import likeActive from '../../assets/images/active_like.svg';
import likeDisabled from '../../assets/images/disabled_like.svg';
import dislikeActive from '../../assets/images/active_dislike.svg';
import dislikeDisabled from '../../assets/images/disbled_dislike.svg';
import { useState } from 'react';

type TReactionsProps = {
  likesCount: number;
  dislikesCount: number;
  isLiked: boolean;
  isDisliked: boolean;
};

const Reactions: React.FC<TReactionsProps> = ({
  likesCount = 0,
  dislikesCount = 0,
  isLiked = false,
  isDisliked = false,
}) => {
  const [like, setLike] = useState<boolean>(isLiked);
  const [dislike, setDislike] = useState<boolean>(isDisliked);
  const [likesCounter, setLikesCounter] = useState<number>(likesCount);
  const [dislikesCounter, setDislikesCounter] = useState<number>(dislikesCount);
  const isLike = !dislike && like;
  const isDislike = !like && dislike;

  const handleSetLikeCounter = () => {
    setLikesCounter((prev) => (!like ? (prev += 1) : (prev -= 1)));
    dislike && handleSetDislikeCounter();
  };
  const handleSetDislikeCounter = () => {
    setDislikesCounter((prev) => (!dislike ? (prev += 1) : (prev -= 1)));
    like && handleSetLikeCounter();
  };

  const handleLikeClick = () => {
    setLike(!like);
    handleSetLikeCounter();
    setDislike(false);
  };

  const handleDislikeClick = () => {
    setDislike(!dislike);
    handleSetDislikeCounter();
    setLike(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.reactionsContainer}>
        <button className={styles.reactionButton} onClick={handleLikeClick}>
          <img
            className={styles.reactionImage}
            src={isLike ? likeActive : likeDisabled}
            alt="like"
          />
        </button>

        <p className={styles.counter}>{likesCounter}</p>
      </div>

      <div className={styles.reactionsContainer}>
        <button className={styles.reactionButton} onClick={handleDislikeClick}>
          <img
            className={styles.reactionImage}
            src={isDislike ? dislikeActive : dislikeDisabled}
            alt="dislike"
          />
        </button>

        <p className={styles.counter}>{dislikesCounter}</p>
      </div>
    </div>
  );
};

export default Reactions;
