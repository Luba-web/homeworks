import PropTypes from 'prop-types';

export const Listing = ({ item }) => {
  const trim = (str, n) => new RegExp(`^.{0,${n}}.*?(?=\b| |$)`).exec(str)[0];
  const cur = () => {
    switch (item.currency_code) {
      case 'USD':
        return <span>&#36;</span>;
      case 'EUR':
        return <span>&euro;</span>;
      default:
        return item.currency_code;
    }
  };

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={item.url}>
          <img src={item.MainImage?.url_570xN} alt='картинка' />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{trim(item.title, 50) + '...'}</p>
        <p className='item-price'>
          {cur()}
          &nbsp;{item.price}
        </p>
        <p
          className={
            item.quantity < 10
              ? 'item-quantity level-low'
              : item.quantity < 20
              ? 'item-quantity level-medium'
              : 'item-quantity level-high'
          }
        >
          {item.quantity} left
        </p>
      </div>
    </div>
  );
};

Listing.propTypes = {
  listing_id: PropTypes.number,
  url: PropTypes.string,
  MainImage: PropTypes.objectOf({ url_570xN: PropTypes.string }), // информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
  title: PropTypes.string, //название предложения, строка;
  currency_code: PropTypes.string, //код валюты, строка;
  price: PropTypes.string, //цена, строка;
  quantity: PropTypes.number, //доступное количество, число.
};
