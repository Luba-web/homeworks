export const getPost = (postId, dataSetter) => {
  fetch('http://localhost:7777/posts')
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      console.error('Данные не загрузились');
    })
    .then((data) => {
      let post = data.find((x) => x.id == postId);
      dataSetter(post);
    });
};

export const postPost = (postId, content, navigate) => {
  fetch('http://localhost:7777/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: postId,
      content: content,
    }),
  }).then(() => {
    return navigate('/');
  });
};
