import styles from './styles.module.scss';
import {
  mainSubtitleTextContent,
  mainTitleTextContent,
} from '../../constants/textContentConstants';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{mainTitleTextContent}</h1>
      <p className={styles.subtitle}>{mainSubtitleTextContent}</p>
    </header>
  );
};

export default Header;
