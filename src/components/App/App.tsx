import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import { useAppDispatch, useAppSelector } from '../../types/types';
import { useEffect } from 'react';
import { thunkGetTopicList } from '../../services/thunks/topicsThunk';

const App = () => {
  const { topicList } = useAppSelector((store) => store.topics);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (topicList.length > 0) return;
    dispatch(thunkGetTopicList());
  }, [dispatch, topicList]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
