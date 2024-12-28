

const ProductItem = ({item}) => {

  return (
    <>
      <div className="product__item">
        <img src={item.image} alt={item.name} />
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.category} </div>
        <div>{item.discount}</div>
      </div>
    </>
  );
};

export default ProductItem;
