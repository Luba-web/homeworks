/**
 * Контейнер для блоков новостей
 *
 */

import { useState } from 'react';
import { InfoBlock } from '../InfoBlock/InfoBlock';

export const InfoContainer = ({ props }) => {
  const [arr, setArr] = useState([]);

  setArr(props.arr);

  return arr.map((item) => <InfoBlock item={item} />);
};
