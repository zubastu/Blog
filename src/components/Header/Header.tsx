import styles from './styles.module.scss';
import {
  mainSubtitleTextContent,
  mainTitleTextContent,
} from '../../constants/textContentConstants';
import { useLocation } from 'react-router';

const Header = () => {
  const { pathname } = useLocation();

  const isTopic = !pathname.includes('topic');

  return (
    <header className={styles.header}>
      {isTopic ? (
        <>
          <h1 className={styles.heading}>{mainTitleTextContent}</h1>
          <p className={styles.subtitle}>{mainSubtitleTextContent}</p>
        </>
      ) : null}
    </header>
  );
};

export default Header;
