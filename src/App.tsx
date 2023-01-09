import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './hooks/auth';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='room/new'
            element={<NewRoom />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
