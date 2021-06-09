import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import News from "./components/News/News";

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   const url =
  //     "https://newsapi.org/v2/everything?q=tesla&from=2021-05-09&sortBy=publishedAt&apiKey=9f1ed75e72ae434799e959a95c620198";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setArticles(data.articles));
  // }, []);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-05-09&sortBy=publishedAt&apiKey=9f1ed75e72ae434799e959a95c620198";
    axios(url).then((data) => setArticles(data.data.articles));
  }, []);
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
}

export default App;
