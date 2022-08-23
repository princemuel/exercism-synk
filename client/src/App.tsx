import { Route, Routes } from 'react-router-dom';
import { AddClient, Clients, Header, Projects } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route
            index
            element={
              <div className='container'>
                <AddClient />
                <Projects />
                <Clients />
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
