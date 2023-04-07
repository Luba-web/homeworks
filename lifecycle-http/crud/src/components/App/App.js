import { useEffect } from 'react';
import { useState } from 'react';
import { Content } from '../Content/Content';
import { Form } from '../Form/Form';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const updatePost = async () => {
    const response = await fetch('http://localhost:7777/notes', {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
    });
    const dataGet = await response.json();
    setData([...dataGet]);
  };

  useEffect(() => {
    updatePost();
  }, []);

  const addContent = async (items) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: items.id, content: items.content }),
    };
    await fetch('http://localhost:7777/notes', requestOptions);

    updatePost();
  };

  const removeContent = async (id) => {
    const requestOptions = {
      method: 'DELETE',
    };
    await fetch(`http://localhost:7777/notes/${id}`, requestOptions);

    updatePost();
  };

  return (
    <div className="App-header">
      <Form addContent={addContent} updatePost={updatePost} />
      <ul className="container">
        {data.map((i) => {
          return <Content key={i.id} item={i} removeContent={removeContent} />;
        })}
      </ul>
    </div>
  );
}

export default App;
