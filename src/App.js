import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Router>
        <NavBar />
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </div>
      <div className="App">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
