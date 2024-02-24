import styles from './styles.module.scss';
import { Route, Routes } from 'react-router';
import Topics from '../Topics/Topics';
import Topic from '../Topic/Topic';

enum Paths {
  main = '/',
  topic = 'topic/:id',
}

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path={Paths.main} element={<Topics />} />
        <Route path={Paths.topic} element={<Topic />} />
      </Routes>
    </main>
  );
};

export default Main;
