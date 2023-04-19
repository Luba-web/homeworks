import { DriftPage } from '../DriftPage/DriftPage';
import { ForzaPage } from '../ForzaPage/ForzaPage';
import { HomePage } from '../HomePage/HomePage';
import { Menu } from '../Menu/Menu';
import { TimeAttackPage } from '../TimeAttackPage/TimeAttackPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
