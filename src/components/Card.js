import react, { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState("");
  const fetchData = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151%27"
    );
    setData(res.data.results);
  };

  useEffect(() => {
    fetchData();
  }, [searchData]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const result = data.filter(
      (res) => res.name.toLowerCase().indexOf(e.target.value) > -1
    );
    setSearchData(result);
  };

  return (
    <div>
      <h1>hi</h1>
      <input value={searchText} onChange={handleSearch} />
      {searchText.length > 1 &&
        searchData.map((sug) => {
          return <p>{sug.name}</p>;
        })}
      {/* {data.map((item) => {
        return (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.url}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Card;
