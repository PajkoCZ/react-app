// *** CSS styly ***
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// *** Pages ***
import Template from './components/Template/Template';
import TabsComp from './components/Tabs/TabsComp';
import Snackbar from './components/Snackbar/Snackbar';
import DateComp from './components/Date/DateComp';
import Book from './pages/Books/Books';





// *** Authentication ***
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Login from './pages/Login/Login';
import Users from './components/TableComp/Users';



function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  }

  console.log(currentUser);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Template /></RequireAuth>} />
            <Route path='tabs' element={<RequireAuth><TabsComp /></RequireAuth>} />
            <Route path='snackbar' element={<RequireAuth><Snackbar /></RequireAuth>} />
            <Route path='date' element={<RequireAuth><DateComp /></RequireAuth>} />
            <Route path='book' element={<RequireAuth><Book /></RequireAuth>} />
            <Route path='users' element={<RequireAuth><Users /></RequireAuth>} />
            
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
