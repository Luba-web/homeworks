import { useSelector, useDispatch } from 'react-redux';
import {
  changeServiceField,
  addService,
  editService,
  resetService,
} from '../../redux/actionCreators';

export default function Add() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!item.id) {
      dispatch(addService(item.name, item.price));
      dispatch(resetService());
      return;
    }
    dispatch(editService(item.id, item.name, item.price));
  };

  const handleCancel = (evt) => {
    evt.preventDefault();
    dispatch(resetService());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleInputChange} value={item.name} />
      <input
        name="price"
        type="number"
        onChange={handleInputChange}
        value={item.price}
      />
      <button type="submit" disabled={item.price === '' || item.name === ''}>
        Сохранить
      </button>
      <button onClick={handleCancel}>Отменить</button>
    </form>
  );
}
