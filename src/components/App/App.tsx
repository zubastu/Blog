import { Route, Routes } from 'react-router';

import styles from './App.module.scss';

enum Paths {
  main = '/',
  topic = 'topic/:id',
}

const App = () => {
  return (
    <>
      <header className={styles.header} />
      <main className={styles.main}>
        <Routes>
          <Route path={Paths.main} element={<>test</>}>
            <Route path={Paths.topic} element={<>test</>} />
          </Route>
        </Routes>
      </main>
      <footer className={styles.footer} />
    </>
  );
};

export default App;
