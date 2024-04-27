import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/newproject">New Project</Link>
        </ul>
      </div>


    <Container customClass="min-height">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/empresa" element={<Empresa />}/>
          <Route path="/newproject" element={<NewProject />}/>
      </Routes>
    </Container>

      <p>Footer</p>
    </Router>

  )
}

export default App
