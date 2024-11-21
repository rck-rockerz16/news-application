import PropTypes from "prop-types";

function Card(props) {
  const news = props.data;

  if (!news || news.length === 0) {
    return <p>No news to display. Please search for something.</p>;
  }

  const readMore = (url) => {
    window.open(url);
  };
  return (
    <div className="card-container">
      {news.map((currItem, index) => {
        if (!currItem.urlToImage) return null;
        return (
          <div className="card" key={index}>
            <img src={currItem.urlToImage} alt={currItem.title} />
            <div className="card-content">
              <a
                className="card-title"
                href={currItem.link}
                onClick={() => readMore(currItem.url)}
              >
                {currItem.title}
              </a>
              <p>{currItem.description}</p>
              <button onClick={() => readMore(currItem.url)}>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired, // Image URL
      title: PropTypes.string.isRequired, // Title of the news
      description: PropTypes.string.isRequired, // Description of the news
      link: PropTypes.string.isRequired, // Link to the full news article
    })
  ).isRequired,
};

export default Card;
