import { useId, useState } from "react";
import dummyObject from "../services/paintingsData";
import Product from "./Product";
import "./Shelf.css";
import Navbar from "./Navbar";

const Shelf = () => {
  const [paintingsCollection] = useState(dummyObject);
  const [filters, setFilters] = useState({
    type: "all",
    max_price: Infinity,
  });

  const maxPriceId = useId();
  const typeId = useId();

  const filterPaintings = (paintingsCollection) => {
    return paintingsCollection.filter((item) => {
      return (
        item.price <= filters.max_price &&
        (filters.type === "all" || filters.type === item.type)
      );
    });
  };

  const filteredCollection = filterPaintings(paintingsCollection);

  return (
    <>
      <div className="shelf">
        <h1>Browse in our delightful collection</h1>

        <section className="filters">
          <div>
            <label htmlFor={maxPriceId}>Max price</label>
            <input type="number" id={maxPriceId} min="0" />
          </div>

          <div>
            <label htmlFor={typeId}>Type</label>
            <select id={typeId}>
              <option value="all">All</option>
              <option value="oil">Oil</option>
              <option value="acrylic">Acrylic</option>
              <option value="watercolor">Watercolor</option>
              <option value="pastel">Pastel</option>
              <option value="gouache">Gouache</option>
              <option value="ink">Ink</option>
              <option value="fresco">Fresco</option>
              <option value="tempera">Tempera</option>
              <option value="digital">Digital</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </section>

        {filteredCollection.map((item) => {
          const {
            painting_id,
            title,
            description,
            price,
            image_url,
            type,
            artist_id,
          } = item;
          return (
            <Product
              key={painting_id}
              painting_id={painting_id}
              title={title}
              description={description}
              price={price}
              image_url={image_url}
              type={type}
              artist_id={artist_id}
            ></Product>
          );
        })}
      </div>
    </>
  );
};

export default Shelf;
