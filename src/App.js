import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="App-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
