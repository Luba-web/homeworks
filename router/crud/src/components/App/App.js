import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PostsHome } from '../PostsHome/PostsHome';
import { NewPost } from '../NewPost/NewPost';
import { PostId } from '../PostId/PostId';
import { EditionPost } from '../EditionPost/EditionPost';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    return navigate('/');
  }, []);

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<PostsHome />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:postId" element={<PostId />} />
        <Route path="/posts/edition/:postId" element={<EditionPost />} />
      </Routes>
    </div>
  );
}

export default App;
