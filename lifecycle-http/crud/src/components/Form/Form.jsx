import { useState } from 'react';

export const Form = ({ addContent, updatePost }) => {
  const [contentInput, setContentInput] = useState('');

  const handleContent = ({ target }) => {
    const { value } = target;
    return setContentInput(value);
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
      content: contentInput,
    };
    addContent(newItem);
    setContentInput('');
  };

  return (
    <form className="form-info" onSubmit={handleSubmit}>
      <label className="lable" htmlFor="title">
        <span>Заметки</span>
        <input
          name="content"
          className="input"
          type="text"
          value={contentInput}
          onChange={handleContent}
          onKeyDown={handleKeyPress}
        ></input>
      </label>
      <button type="button" className="btn-ok" onClick={updatePost}>
        Обновить
      </button>
      <button type="submit" className="btn-ok">
        Добавить
      </button>
    </form>
  );
};
