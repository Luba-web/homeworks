import { Listing } from '../Listing/Listing';
import { data } from '../utils/data';
import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(data);

  return (
    <div className='item-list'>
      {items.map((item, index) => {
        if (!item.error_messages) {
          return <Listing key={index} item={item} />;
        }
      })}
    </div>
  );
}

export default App;
