import { useState } from 'react';
import './formHexToRgb.css';

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )})`
    : 'Mistake!';
};

export const FormHexToRgb = () => {
  const [input, setInput] = useState({
    name: '',
    color: 'rgb(52, 73, 94)',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (value.length === 7) {
      const color = hexToRgb(value);

      return setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
        color: color === 'Mistake!' ? '#cf222e' : color,
      }));
    }

    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <div className="container" style={{ backgroundColor: input.color }}>
      <form className="container-form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="#34495e"
          maxLength={7}
          name="name"
          type="text"
          value={input.name}
          onChange={handleChange}
        />
      </form>
      <div className="result">
        <div>{input.color === '#cf222e' ? 'Mistake!' : input.color}</div>
      </div>
    </div>
  );
};
