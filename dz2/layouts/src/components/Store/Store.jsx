import { useState } from 'react';
import { products } from '../../utils/utils';
import { CardsView } from '../CardsView/CardsView';
import { IconSwitch } from '../IconSwitch/IconSwitch';
import { ListView } from '../ListView/ListView';
import './store.css';

export const Store = () => {
  const [state, setState] = useState('view_list');

  const onSwitch = () => {
    setState((prev) => (prev === 'view_list' ? 'view_module' : 'view_list'));
  };

  return (
    <>
      <div className="container">
        <IconSwitch icon={state} onSwitch={onSwitch} />
      </div>
      <ul
        className={state === 'view_list' ? 'container-list' : 'container-card'}
      >
        {state === 'view_list'
          ? products.map((product, index) => (
              <ListView product={product} key={index} />
            ))
          : products.map((product, index) => (
              <CardsView product={product} key={index} />
            ))}
      </ul>
    </>
  );
};
