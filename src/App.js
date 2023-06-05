import './App.css';
import MainGallery from './components/MainGallery';
import Header from './components/Header';
import Home from './components/Home';
import OpeningTimes from './components/OpeningTimes';
import MainReviews from './components/MainReviews';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMePage from './components/AboutMePage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     
     <Router>
    <Header />
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/gallery" element={<MainGallery />} />
          <Route path="/reviews" element={<MainReviews />} /> 
          <Route path="/openingtimes" element={<OpeningTimes />} />
          <Route path="/contact" element={<Contact />} />      
        </Routes>
    <Footer />
      </Router>
    </div>
  );
}

export default App;
