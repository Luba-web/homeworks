import { useState } from 'react';
import { arr } from '../../utils/constsnts';
import { DropdownItem } from '../DropdownItem/DropdownItem';

export const DropdownList = () => {
  const [state, setState] = useState(arr[0]);

  const handleClick = (e) => {
    setState(e.target.innerText);
  };

  return (
    <ul data-id="dropdown" className="dropdown" onClick={handleClick}>
      {arr.map((item) => {
        if (item === state) {
          return <DropdownItem item={item} state={true} />;
        }
        return <DropdownItem item={item} state={false} />;
      })}
    </ul>
  );
};
