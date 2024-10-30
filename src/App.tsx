import "./App.css";
import Product from "./components/Product";

function App() {
  const dummyObject = {
    painting_id: 123,
    title: "Painting Title",
    description:
      "Lorem ipsum ... useContext. Este hook nos permite crear un estado global de nuestra aplicación sin necesidad de pasar datos a través de múltiples componentes. Al crear un contexto, podemos almacenar datos en él y luego acceder a ellos desde cualquier componente que consuma ese contexto.",
    price: 699900.0,
    image_url: "https://i.ebayimg.com/images/g/Jy0AAOSw6eFkBFZt/s-l1200.jpg",
    type: "oil",
    artist_id: 55,
    created_at: "25-03-2024",
    updated_at: new Date().toString(),
  };

  const { painting_id, title, description, price, image_url, type, artist_id } =
    dummyObject;

  return (
    <>
      <Product
        painting_id={painting_id}
        title={title}
        description={description}
        price={price}
        image_url={image_url}
        type={type}
        artist_id={artist_id}
      ></Product>
      <Product
        painting_id={painting_id}
        title={title}
        description={description}
        price={price}
        image_url="https://birdanddavis.com/cdn/shop/articles/Screenshot_2022-09-20_at_09.51.31.png?v=1663664651"
        type={type}
        artist_id={artist_id}
      ></Product>
      <Product
        painting_id={painting_id}
        title={title}
        description={description}
        price={price}
        image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfi2SV0gapUAyVCBLIHXwSq5fXRz7qliFL4g&s"
        type={type}
        artist_id={artist_id}
      ></Product>
      <Product
        painting_id={painting_id}
        title={title}
        description={description}
        price={price}
        image_url="https://thevirtualinstructor.com/blog/wp-content/uploads/2020/05/oil-painting-vegetables-still-life.jpg"
        type={type}
        artist_id={artist_id}
      ></Product>
    </>
  );
}

export default App;
