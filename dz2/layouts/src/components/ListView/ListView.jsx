import './listView.css';
export const ListView = ({ product }) => {
  return (
    <div className={'list'}>
      <img className={'list-img'} src={product.img} all="картинка товара" />
      <h2 className={'list-name'}>{product.name}</h2>
      <p className={'list-color'}>{product.color}</p>
      <p className={'list-prise'}>${product.price}</p>
      <button className={'list-button'}>add to cart</button>
    </div>
  );
};
