import "./ProductCard.css";
const ProductCard = ({ item }) => {
  return (
    <div className="product_card">
      <h3>{item.title}</h3>
      <div className="price">
        <span>Price:</span> $ {item.price}
      </div>
      <div className="item_img">
        <img src={item.image} alt="item image" />
      </div>
    </div>
  );
};

export default ProductCard;
