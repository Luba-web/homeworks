import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { List } from './components/List';
import { Details } from './components/Details';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<List />} />
      <Route path="/:id/details" element={<Details />} />
    </Routes>
  );
}

export default App;
