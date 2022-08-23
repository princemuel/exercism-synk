import { Route, Routes } from 'react-router-dom';
import { Header, Project, Projects } from './components';
import { Home, Missing } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />

          <Route path='projects'>
            <Route index element={<Projects />} />
            <Route path=':id' element={<Project />} />
          </Route>

          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
