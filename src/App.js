import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Products from './components/Products';
import data from './data/data'


function App() {

const [products, setProducts] = useState(data)

const [search, setSearch] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Nav setSearch={setSearch} />
      </header>
      <div className="App-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} search={search} />} />
        <Route path="/about" element={<About />}/>
      </Routes>  
      </div>
    </div>
  );
}

export default App;
