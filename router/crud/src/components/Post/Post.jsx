import { useNavigate } from 'react-router-dom';

export const Post = ({ postInfo }) => {
  const navigate = useNavigate();

  const showCard = (e) => {
    return navigate(`/posts/${postInfo.id}`);
  };

  let date = getFormattedDate(postInfo.created);

  return (
    <div onClick={showCard} className="post">
      <span>Id: {postInfo.id}</span>
      <br />
      <span>Content:</span>
      <br />
      <textarea readOnly value={postInfo.content}></textarea> <br />
      <span>Created: {date}</span>
      <br />
    </div>
  );
};

export const getFormattedDate = (createdDate) => {
  let date = new Date(createdDate);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();

  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
};
