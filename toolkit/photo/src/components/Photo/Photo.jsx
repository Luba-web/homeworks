import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addImage } from '../../features/slice';

export function Photo() {
  const images = useSelector((state) => state.photos.image);
  console.log(images);
  const dispatch = useDispatch();

  function handleChange({ target }) {
    let file = target.files[0];
    dispatch(addImage(file));
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <div className="photo-block">
        {images.map((x, i) => {
          return <img src={x} alt="картинка" key={i} />;
        })}
      </div>
    </div>
  );
}
