import { productList } from "../data/product";
import ProductItem from "./ProductItem";

const ProductList = () => {
  console.log(productList);

  return (
    <>
      <div className="product__list">
        {productList.map((item) => (
          <ProductItem  item={item} key={item.id}/>
        ))}
      </div>
    </>
  );
};

export default ProductList;
