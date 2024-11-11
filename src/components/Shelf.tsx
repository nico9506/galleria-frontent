import { useId, useState } from "react";
import Product from "./Product";
import DataFetcher from "../services/DataFetcher";
import "./Shelf.css";

const Shelf = () => {
  const { data, loading, error } = DataFetcher(
    "http://localhost:3000/painting",
  );

  const maxPriceId = useId();
  const typeId = useId();

  const [filters, setFilters] = useState({
    type: "all",
    max_price: Infinity,
  });

  const filterPaintings = (data) => {
    return data.filter((item) => {
      return (
        item.price <= filters.max_price &&
        (filters.type === "all" || filters.type === item.type)
      );
    });
  };

  const filteredCollection = filterPaintings(data);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  // Event handler to update max_price filter
  const handleMaxPriceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      max_price: e.target.value ? parseFloat(e.target.value) : Infinity, // set to Infinity if empty
    }));
  };

  // Event handler to update type filter
  const handleTypeChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      type: e.target.value,
    }));
  };

  return (
    <>
      <div className="shelf">
        <section className="filters">
          <div>
            <label htmlFor={maxPriceId}>Max price</label>
            <input
              type="number"
              id={maxPriceId}
              min="0"
              value={filters.max_price === Infinity ? "" : filters.max_price}
              onChange={handleMaxPriceChange}
            />
          </div>

          <div>
            <label htmlFor={typeId}>Type</label>
            <select
              id={typeId}
              value={filters.type}
              onChange={handleTypeChange}
            >
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
