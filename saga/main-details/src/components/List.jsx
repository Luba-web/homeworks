import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServicesRequest } from '../actions/actionCreators';

export function List() {
  const { services, loading, error } = useSelector(
    (state) => state.serviceList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  const onRetry = () => {
    dispatch(fetchServicesRequest());
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
    <>
      <p>Список:</p>
      <ul>
        {services.map(({ id, name, price }) => (
          <li key={id}>
            <Link to={`/${id}/details`}>{`${name} ${price}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
