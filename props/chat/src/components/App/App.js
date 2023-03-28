import { useState } from 'react';

import { MessageHistory } from '../MessageHistory/MessageHistory';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={list} />
        </div>
      </div>
    </div>
  );
}

export default App;
