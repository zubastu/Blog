import { Route, Routes } from 'react-router';

import styles from './App.module.scss';
import Header from '../Header/Header';

enum Paths {
  main = '/',
  topic = 'topic/:id',
}

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path={Paths.main} element={<>test</>} />
          <Route path={Paths.topic} element={<>test2</>} />
        </Routes>
      </main>
      <footer className={styles.footer} />
    </>
  );
};

export default App;
