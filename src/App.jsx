import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/header/Header';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

    </Router>
  )
}

export default App