import styles from './styles.module.scss';
import { Route, Routes } from 'react-router';
import SearchForm from '../../components/SearchForm/SearchForm';

enum Paths {
  main = '/',
  topic = 'topic/:id',
}

const Main = () => {
  return (
    <main className={styles.main}>
      <SearchForm />
      <Routes>
        <Route path={Paths.main} element={<>test</>} />
        <Route path={Paths.topic} element={<>test2</>} />
      </Routes>
    </main>
  );
};

export default Main;
