import { useState } from 'react';
import { Step } from '../Step/Step';
import { StepForm } from '../StepForm/StepForm';
import './App.css';

function App() {
  const [distanceDate, setDistanceDate] = useState([]);

  //добавление и проверка на соответствии даты
  const addStep = (items) => {
    const existingDate = distanceDate.find((o) => o.date === items.date);
    if (existingDate) {
      setDistanceDate((prevState) =>
        prevState.map((item) => {
          if (item.date === existingDate.date) {
            return {
              ...item,
              distance: parseFloat(item.distance) + parseFloat(items.distance),
            };
          }
          return item;
        })
      );
    } else {
      setDistanceDate((prevState) => [...prevState, items]);
    }

    setDistanceDate((prev) =>
      prev.sort(
        (a, b) =>
          new Date(...b.date.split('.').reverse()) -
          new Date(...a.date.split('.').reverse())
      )
    );
  };

  //удаление
  const deleteStep = (id) => {
    setDistanceDate((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="App-header">
      <StepForm addStep={addStep} />
      <div className="container-menu">
        <p>Дата (ДД.ММ.ГГ)</p>
        <p>Пройдено км</p>
        <p>Действие </p>
      </div>
      <ul className="container">
        {distanceDate.map((day) => {
          console.log('distanceDate', distanceDate);
          return <Step key={day.id} day={day} deleteStep={deleteStep} />;
        })}
      </ul>
    </div>
  );
}

export default App;
