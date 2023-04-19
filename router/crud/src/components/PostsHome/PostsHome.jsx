import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../Post/Post';

export const PostsHome = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then((res) => {
        return res.json();
      })
      .catch(() => {
        console.error('Данные не загрузились');
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const addPost = () => {
    return navigate('/posts/new');
  };

  return (
    <>
      <div className="header">
        <button onClick={addPost}>Создать пост</button>
      </div>

      {posts.map((item) => {
        return <Post key={item.id} postInfo={item} />;
      })}
    </>
  );
};
