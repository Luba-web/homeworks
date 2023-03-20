import './app.css';
import { DropdownList } from '../DropdownList/DropdownList';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);

  const toggleOpen = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="container">
      <div
        data-id="wrapper"
        className={
          active === true ? 'dropdown-wrapper open' : 'dropdown-wrapper'
        }
      >
        <DropdownList />
        <button data-id="toggle" className="btn" onClick={toggleOpen}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
      </div>
    </div>
  );
}

export default App;
