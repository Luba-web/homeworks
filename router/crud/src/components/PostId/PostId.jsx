import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost } from '../helpers/helpers';

export const PostId = () => {
  const navigate = useNavigate();
  let { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(postId, setPost);
  }, []);

  const edit = (e) => {
    return navigate(`/posts/edition/${postId}`);
  };

  const remove = () => {
    fetch(`http://localhost:7777/posts/${postId}`, {
      method: 'DELETE',
    }).then(() => {
      return navigate('/');
    });
  };

  return (
    <div className="form-edit">
      <div>
        <textarea readOnly value={post.content}></textarea>
      </div>
      <button type="submit" onClick={edit}>
        Изменить
      </button>
      <button type="submit" onClick={remove}>
        Удалить
      </button>
    </div>
  );
};
