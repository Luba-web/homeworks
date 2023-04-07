import { useState } from 'react';

export const Form = ({ addClock }) => {
  const [titleInput, setTitleInput] = useState('');
  const [timeZoneInput, setTimeZoneInput] = useState('');

  const handleTitle = ({ target }) => {
    const { value } = target;
    return setTitleInput(value);
  };
  const handleTimeZone = ({ target }) => {
    const { value } = target;
    return setTimeZoneInput(value);
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
      title: titleInput,
      timeZone: timeZoneInput,
    };
    addClock(newItem);
    setTitleInput('');
    setTimeZoneInput('');
  };

  return (
    <form className="form-info" onSubmit={handleSubmit}>
      <label className="lable" htmlFor="title">
        <span>Название</span>
        <input
          name="title"
          className="input"
          type="text"
          value={titleInput}
          onChange={handleTitle}
          onKeyDown={handleKeyPress}
        ></input>
      </label>
      <label className="lable" htmlFor="timeZone">
        <span>Временная зона</span>
        <input
          name="timeZone"
          className="input"
          min={-12}
          max={12}
          type="number"
          value={timeZoneInput}
          onChange={handleTimeZone}
        ></input>
      </label>

      <button type="submit" className="btn-ok">
        Добавить
      </button>
    </form>
  );
};
