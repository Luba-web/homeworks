import { useState } from 'react';
import '../app/App.css';

export const StepForm = ({ addStep }) => {
  const [dayInput, setDayInput] = useState('');
  const [distanceInput, setDistanceInput] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    return setDayInput(value);
  };
  const handleChangeKm = ({ target }) => {
    const { value } = target;
    return setDistanceInput(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newItem = {
      id: Math.random().toString(36),
      date: dayInput,
      distance: distanceInput,
    };
    addStep(newItem);
    setDayInput('');
    setDistanceInput('');
  };

  return (
    <form className="form-info" onSubmit={handleSubmit}>
      <label className="lable" htmlFor="date">
        <span>Дата (ДД.ММ.ГГ)</span>
        <input
          name="date"
          className="input"
          type="date"
          min="2023-01-01"
          max="2023-12-31"
          value={dayInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        ></input>
      </label>
      <label className="lable" htmlFor="km">
        <span>Пройдено км</span>
        <input
          name="km"
          className="input"
          type="text"
          value={distanceInput}
          onChange={handleChangeKm}
        ></input>
      </label>

      <button type="submit" className="btn-ok">
        Ok
      </button>
    </form>
  );
};
