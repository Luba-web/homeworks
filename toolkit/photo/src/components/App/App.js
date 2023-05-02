import React from 'react';

import './App.css';
import { Photo } from '../Photo/Photo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Добавь фото или картинку</p>
        <Photo />
      </header>
    </div>
  );
}

export default App;
