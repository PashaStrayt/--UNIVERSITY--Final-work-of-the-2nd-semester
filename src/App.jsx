import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import WorkIdPage from './pages/WorkIdPage/WorkIdPage';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/works/:title' element={<WorkIdPage />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;