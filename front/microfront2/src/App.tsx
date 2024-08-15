// src/App.js en microfront-2

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PageAbout from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageAbout />} />
      </Routes>
    </Router>
  );
}

export default App;