import './App.css';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<></>}>
        <Route path="topic/:id" element={<></>} />
      </Route>
    </Routes>
  );
};

export default App;
