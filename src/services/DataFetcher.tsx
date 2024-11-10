import { useEffect, useState } from "react";

// const dummyObject = [
//   {
//     painting_id: 123,
//     title: "Painting Title",
//     description:
//       "Lorem ipsum ... useContext. Este hook nos permite crear un estado global de nuestra aplicación sin necesidad de pasar datos a través de múltiples componentes. Al crear un contexto, podemos almacenar datos en él y luego acceder a ellos desde cualquier componente que consuma ese contexto.",
//     price: 699900.0,
//     image_url: "https://i.ebayimg.com/images/g/Jy0AAOSw6eFkBFZt/s-l1200.jpg",
//     type: "oil",
//     artist_id: 55,
//     created_at: "25-03-2024",
//     updated_at: new Date().toString(),
//   },
// ];

const DataFetcher = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default DataFetcher;
