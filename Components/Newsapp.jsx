import { useEffect, useState } from "react";
import Card from "./Card.jsx";
function Newsapp() {
  const [search, setSearch] = useState("india");
  const [news, setNews] = useState(null);

  const API_KEY = "213f84f8556f4db9b0b3d9fec5de9e17";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    setNews(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (event) => {
    const searchWord = event.target.value;
    setSearch(searchWord);
  };
  const userBtn = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <nav>
        <div>
          <h1>Latest News</h1>
        </div>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search News..."
            value={search}
            onChange={handleInput}
          />
          <button className="search-btn" onClick={getData}>
            Search
          </button>
        </div>
      </nav>
      <div>
        <p className="headline">Stay updated with Trendy News</p>
      </div>
      <div className="category-btn">
        <button onClick={() => userBtn()} value="Entertainment">
          Entertainment
        </button>
        <button onClick={() => userBtn()} value="Fitness">
          Fitness
        </button>
        <button onClick={() => userBtn()} value="Health">
          Health
        </button>
        <button onClick={() => userBtn()} value="Politics">
          Politics
        </button>
        <button onClick={() => userBtn()} value="Sports">
          Sports
        </button>
      </div>

      <div>
        <Card data={news}></Card>
      </div>
    </div>
  );
}

export default Newsapp;
