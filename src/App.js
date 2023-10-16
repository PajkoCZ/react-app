import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

function App() {
  return <BrowserRouter>
    <Navbar />
     <Routes>
        <Route path='/' element={<h1>Toto je nadpis Home</h1>}></Route>
        <Route path='users' element={<Navbar />}></Route>
        <Route path='home' element={<Home />}></Route>
     </Routes>
     <Footer />
  </BrowserRouter>
}

export default App;
