import { useState } from 'react';
import { arr } from '../../utils/constsnts';
import { DropdownItem } from '../DropdownItem/DropdownItem';

export const DropdownList = () => {
  const [state, setState] = useState(arr[0]);

  const handleClick = (e) => {
    const activeText = e.target.textContent;
    setState(activeText);
  };

  return (
    <ul data-id="dropdown" className="dropdown" onClick={handleClick}>
      {arr.map((item, index) => {
        if (item === state) {
          return <DropdownItem item={item} state={true} key={index} />;
        }
        return <DropdownItem item={item} state={false} key={index} />;
      })}
    </ul>
  );
};
