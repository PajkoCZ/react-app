// *** CSS styly ***
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// *** Pages ***
import Home from './pages/Home/Home';
import Book from './pages/Books/Books';
import Tabs from './pages/Tabs/Tabs';
import Snackbar from './pages/Snackbar/Snackbar';
import Date from './pages/Date/Date';
import Users from './pages/Users/Users';




// *** Authentication ***
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Login from './pages/Login/Login';




function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  }

  console.log(currentUser);

  return (
    <div className='template'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            

            <Route path='book' element={<RequireAuth><Book /></RequireAuth>} />
           


            <Route path='tabs' element={<RequireAuth><Tabs title="Tabs"/></RequireAuth>} />
            <Route path='snackbar' element={<RequireAuth><Snackbar title="Snackbar"/></RequireAuth>} />
            <Route path='date' element={<RequireAuth><Date /></RequireAuth>} />
            <Route path='users' element={<RequireAuth><Users /></RequireAuth>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
