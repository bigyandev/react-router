import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PersonalPage from "./components/PersonalPage"

import './App.css';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:id" element={<PersonalPage />} />
      </Routes>
    </>
  )
}

export default App;
