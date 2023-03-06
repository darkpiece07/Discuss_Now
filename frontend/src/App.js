import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from "./components/Feed"
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route
          path="/feed"
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
