import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import List from '../List/List';
import { filterService } from '../../redux/actionCreators';

export default function Filter() {
  const [nameFilter, setNameFilter] = useState('');

  const items = useSelector((state) => state.serviceList);
  let dispatch = useDispatch();

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleFilterRecords = () => {
    dispatch(filterService(nameFilter));
  };

  return (
    <>
      <input
        name="nameFilter"
        onChange={handleNameFilterChange}
        value={nameFilter}
      />
      <button onClick={handleFilterRecords}>Фильтр</button>
      <br />
      <List items={items} />
    </>
  );
}
