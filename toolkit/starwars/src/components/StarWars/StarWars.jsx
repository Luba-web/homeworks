import { useDispatch, useSelector } from 'react-redux';
import { showFacts } from '../../features/fact/slice';
import { useState } from 'react';

export const StarWars = () => {
  const facts = useSelector((state) => state.facts.currentFacts);
  const dispatch = useDispatch();
  const [state, setState] = useState('');

  const handleChange = ({ target }) => {
    dispatch(showFacts(target.value));
    setState(target.value);
  };

  return (
    <div>
      <input
        type="number"
        min={0}
        max={5}
        value={state}
        onChange={handleChange}
      />
      <div>
        {facts.map((x, idx) => {
          return (
            <span key={idx}>
              {x}
              <br />
            </span>
          );
        })}
      </div>
    </div>
  );
};
