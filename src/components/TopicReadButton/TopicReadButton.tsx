import styles from './styles.module.scss';
import { useNavigate } from 'react-router';

type TTopicRedButtonProps = {
  text: string;
  id: number;
  isSearchList: boolean;
};

const TopicReadButton: React.FC<TTopicRedButtonProps> = ({
  text,
  id,
  isSearchList,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/topic/${id}`, { state: { isSearchList } });
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default TopicReadButton;
