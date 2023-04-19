import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost, postPost } from '../helpers/helpers';

export const EditionPost = () => {
  const navigate = useNavigate();
  let { postId } = useParams();
  const [post, setPost] = useState({});

  const handleForm = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  useEffect(() => {
    getPost(postId, setPost);
  }, []);

  const save = (e) => {
    e.preventDefault();
    postPost(0, post.content, navigate);
  };

  const close = () => {
    return navigate('/');
  };

  return (
    <div className="form-edit">
      <form>
        <button onClick={close}>x</button>
        <div>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleForm}
          ></textarea>
        </div>
        <button type="submit" onClick={save}>
          Сохранить
        </button>
      </form>
    </div>
  );
};
