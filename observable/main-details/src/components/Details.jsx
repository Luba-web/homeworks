import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemRequest } from '../actions/actionCreators';

export function Details() {
  const { item, loading, error } = useSelector((state) => state.serviceItem);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchItemRequest(id));
  }, [dispatch, id]);

  const onRetry = () => {
    dispatch(fetchItemRequest(id));
  };

  if (loading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return (
      <div className="error">
        <p>Произошла ошибка!</p>
        <button className="button" onClick={onRetry}>
          Повторить запрос
        </button>
      </div>
    );
  }
  return (
    <div className="details">
      <p>Название: {item.name}</p>
      <p>Цена: {item.price}</p>
      <p>Описание: {item.content}</p>
    </div>
  );
}
