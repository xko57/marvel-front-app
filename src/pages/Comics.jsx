import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/cardComics";
import Pagination from "../components/pagination";
import SearchBar from "../components/searchBar";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const back_api_url_base = `${import.meta.env.VITE_MARVEL_API_URI}:${
    import.meta.env.VITE_PORT
  }`;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchText, setSearchText] = useState("");
  const itemsPerPage = 100;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skip = (currentPage - 1) * itemsPerPage;
        const response = await axios.get(
          `${back_api_url_base}/comics?skip=${skip}&search=${searchText}`
        );
        setData(response.data.results);
        setTotalItems(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [currentPage, searchText]);

  return isLoading ? (
    <p>Chargement</p>
  ) : (
    <div className="main">
      <div className="container characters-filter">
        <Pagination
          totalItems={totalItems}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
        />
        <SearchBar
          setSearchText={setSearchText}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="container characters-container">
        {data.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            imageUri={`${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`}
            description={
              item.description ||
              "Details en cours de redaction par l'aquipe Marvel qui se la coule douce..à suivre!!!!"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Comics;
