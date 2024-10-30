import "./Product.css";
import { useState } from "react";
import plusIcon from "../assets/plusIcon.svg";
import minusIcon from "../assets/minusIcon.svg";
import cartIcon from "../assets/cartIcon.svg";

interface Prop {
  painting_id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  type: string;
  artist_id: number;
}

const Product = ({
  painting_id,
  title,
  description,
  price,
  image_url,
  type,
  artist_id,
}: Prop) => {
  const [productSelected, setProductSelected] = useState(false);

  const handleCartIconChange = (productSelected: boolean) =>
    productSelected ? minusIcon : plusIcon;
  const handleCartClassChange = (productSelected: boolean) =>
    productSelected ? "red-btn" : "";
  const handleCartClick = () => setProductSelected(!productSelected);

  return (
    <div id={`painting_id_${painting_id}`} className="product">
      <img src={image_url} alt={title} />
      <h1>
        {title} <span className="painting_type">{type}</span>
      </h1>
      <h2>${price}</h2>
      <h3>Author: {artist_id}</h3>
      <p>{description}</p>
      <button
        className={`cart-btn ${handleCartClassChange(productSelected)}`}
        onClick={handleCartClick}
      >
        <img src={handleCartIconChange(productSelected)} />
        <img src={cartIcon} />
      </button>
    </div>
  );
};

export default Product;
