import styles from './styles.module.scss';

type TTopicRedButtonProps = {
  text: string;
  handleClick: () => void;
};

const TopicReadButton: React.FC<TTopicRedButtonProps> = ({
  text,
  handleClick,
}) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default TopicReadButton;
