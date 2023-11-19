import "../styles/css/card.css";

const CardComics = ({ title, imageUri, description }) => {
  console.log(description);
  return (
    <div className="card-container">
      <div className="card-header">
        <h3>{title.length > 50 ? `${title.slice(0, 50)}...` : title}</h3>
        <div className="card-fav">
          <img src="../src/styles/img/empty-fav.png" alt="" />
        </div>
      </div>
      <div className="card" id="card">
        <div className="face front-face">
          <img src={imageUri} alt="" />
          <div className="card-description">
            <img src="../src/styles/img/arrow-back-face.png" alt="" />
          </div>
        </div>
        <div className="face back-face">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComics;
