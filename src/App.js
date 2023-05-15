import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import HomePage from './Components/Home2/Home2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/customer' exact Component={HomePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
