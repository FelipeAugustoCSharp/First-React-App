import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import './App.css'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar/>


  <Container customClass="min-height">      
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/empresa" element={<Empresa />}/>
        <Route path="/newproject" element={<NewProject />}/>
        <Route path="/projects" element={<Projects />}/>
    </Routes>
  </Container>

    <Footer/>
  </Router>
  )
}

export default App
