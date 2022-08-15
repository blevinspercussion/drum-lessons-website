import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Lessons from './components/Lessons';
import Faq from './components/Faq';
import Contact from './components/Contact';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={ <Intro /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/lessons' element={ <Lessons /> } />
        <Route path='/faq' element={ <Faq /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      </Router>
      <Footer />
      <hr />
    </div>
  );
}

export default App;
