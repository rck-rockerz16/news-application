import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      {article.urlToImage && <img src={article.urlToImage} alt="Article" />}
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
