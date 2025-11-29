import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CloudBackground from './components/CloudBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import DownloadsPage from './pages/DownloadsPage'; // Zakładam, że ten plik istnieje
import BookDetailPage from './pages/BookDetailPage'; // <-- Import nowej strony
import ReadingPlomyczekPage from './pages/ReadingPlomyczekPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <CloudBackground />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sklep" element={<ShopPage />} />
          <Route path="/pobieralnia" element={<DownloadsPage />} />
          <Route path="/czytamy-plomyczek" element={<ReadingPlomyczekPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          
          {/* --- NOWA DYNAMICZNA TRASA --- */}
          {/* :bookId to parametr, który pobieramy w BookDetailPage */}
          <Route path="/ksiazka/:bookId" element={<BookDetailPage />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;