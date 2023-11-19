import "../styles/css/card.css";
import { Link } from "react-router-dom";

const CardCharacter = ({ title, imageUri, description }) => {
  console.log(description);
  return (
    <div className="card-container">
      <div className="card-header">
        <Link to="/character/movies">
          <h3>{title.length > 50 ? `${title.slice(0, 50)}...` : title}</h3>
        </Link>

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

export default CardCharacter;
