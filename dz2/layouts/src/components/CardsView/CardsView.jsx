import './cardsView.css';

export const CardsView = ({ product }) => {
  return (
    <div className={'card'}>
      <img className={'card-img'} src={product.img} all="картинка товара" />
      <h2 className={'card-name'}>{product.name}</h2>
      <p className={'card-color'}>{product.color}</p>

      <div className={'card-block'}>
        <p className={'card-prise'}>${product.price}</p>
        <button className={'card-button'}>add to cart</button>
      </div>
    </div>
  );
};
