import PropTypes from 'prop-types';
import { Star } from '../Star/Star';

export const Stars = ({ count }) => {
  const arrInit = Array(count)
    .fill()
    .map((e, i) => i + 1);

  return 6 < count ? (
    <p>Больше звезд не добавить</p>
  ) : 0 < count ? (
    <ul className='card-body-stars u-clearfix'>
      {arrInit.map((item, index) => {
        return <Star key={index} />;
      })}
    </ul>
  ) : (
    <p>нет звезд</p>
  );
};

Stars.propTypes = {
  count: PropTypes.number,
};

Stars.defaultProps = {
  count: 2,
};
