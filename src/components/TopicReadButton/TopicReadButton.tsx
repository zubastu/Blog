import styles from './styles.module.scss';

type TTopicRedButtonProps = {
  text: string;
};

const TopicReadButton: React.FC<TTopicRedButtonProps> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default TopicReadButton;
