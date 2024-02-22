import styles from './styles.module.scss';
import {
  mainSubtitleTextContent,
  mainTitleTextContent,
  topicBackLinkTextContent,
} from '../../constants/textContentConstants';
import SearchForm from '../SearchForm/SearchForm';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Reactions from '../Reactions/Reactions';

const Header = () => {
  const { pathname } = useLocation();

  const isTopic = !pathname.includes('topic');

  return (
    <header className={styles.header}>
      {isTopic ? (
        <>
          <h1 className={styles.heading}>{mainTitleTextContent}</h1>
          <p className={styles.subtitle}>{mainSubtitleTextContent}</p>
          <SearchForm />
        </>
      ) : (
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>
            {topicBackLinkTextContent}
          </Link>
          <Reactions
            dislikesCount={10}
            isDisliked={false}
            isLiked={true}
            likesCount={50}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
