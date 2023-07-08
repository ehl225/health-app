import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Emotional from "./components/Emotional";
import Environmental from "./components/Environmental";
import Financial from "./components/Financial";
import Mental from "./components/Mental";
import Physical from "./components/Physical";
import Social from "./components/Social";
import Spiritual from "./components/Spiritual";
import Vocational from "./components/Vocational";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
                  Welcome to Concious: a comprehensive health platform designed for those who want to take charge of their life. We focus on the seven key dimensions of wellness: physical, emotional, mental, social, financial, spirutual, environmental, and vocational.
        </a>
          </header>
          
    </div>
  );
}

export default App;
