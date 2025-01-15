import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import MatchesPage from './pages/MatchesPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/matchespage" element={<MatchesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
