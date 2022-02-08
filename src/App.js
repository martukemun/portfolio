import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
