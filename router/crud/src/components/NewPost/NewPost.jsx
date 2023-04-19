import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postPost } from '../helpers/helpers';

export const NewPost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addPost = (e) => {
    e.preventDefault();
    postPost(0, form.content, navigate);
  };

  const close = () => {
    return navigate('/');
  };

  return (
    <form className="form-edit">
      <button onClick={close}>Отменить</button>
      <div>
        <textarea
          id="content"
          name="content"
          value={form.content}
          onChange={handleForm}
        ></textarea>
      </div>
      <button type="submit" onClick={addPost}>
        Опубликовать
      </button>
    </form>
  );
};
