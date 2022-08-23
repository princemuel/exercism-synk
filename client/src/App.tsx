import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Missing } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />

          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
