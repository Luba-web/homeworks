import { useDispatch } from 'react-redux';
import {
  removeService,
  changeServiceField,
  resetService,
} from '../../redux/actionCreators';

export default function List({ items }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
    dispatch(resetService());
  };

  const handleEdit = (id) => {
    let item = items.find((x) => x.id === id);
    dispatch(changeServiceField('name', item.name));
    dispatch(changeServiceField('price', item.price));
    dispatch(changeServiceField('id', item.id));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>Удалить</button>
          <button onClick={() => handleEdit(o.id)}>Изменить</button>
        </li>
      ))}
    </ul>
  );
}
