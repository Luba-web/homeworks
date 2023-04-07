import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Clock } from './components/Clock/Clock';
import { Form } from './components/Form/Form';

const initArr = [
  {
    id: Math.random().toString(36),
    title: 'Moscow',
    timeZone: 3,
  },
];

function App() {
  const [state, setState] = useState(initArr);

  const addClock = (items) => {
    if (items) {
      setState((prevState) => [...prevState, items]);
    }
  };

  const refreshClock = () => {
    let date = new Date();
    let newDate = date.getTime();

    setState((prevState) =>
      prevState.map((item) => {
        let timeNew = newDate + (item.timeZone - 3) * 60 * 60 * 1000;
        return { ...item, time: new Date(timeNew).toLocaleTimeString() };
      })
    );
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [state]);

  const removeClock = (id) => {
    setState((prevState) => prevState.filter((i) => i.id !== id));
  };

  return (
    <div className="App-header">
      <Form addClock={addClock} />
      <ul className="container">
        {state?.map((item, index) => {
          return <Clock key={index} item={item} removeClock={removeClock} />;
        })}
      </ul>
    </div>
  );
}

export default App;
