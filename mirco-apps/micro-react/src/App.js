import logo from './assets/logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const a = 1

  return (
    <div className="App">
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : ''}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.{a}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      </Router>
    </div>
  );
}

export default App;
