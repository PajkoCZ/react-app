import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import User from './pages/User';
import Movies from './pages/Movies';

function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='users' element={<User />} />
        <Route path='movies' element={<Movies />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;
