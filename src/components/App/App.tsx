import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import { useAppDispatch } from '../../types/types';
import { useEffect } from 'react';
import { thunkGetTopicList } from '../../services/thunks/topicsThunk';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(thunkGetTopicList());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
