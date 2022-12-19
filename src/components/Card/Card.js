
import "./Card.css";
function Card(props) {

  return (
    
    <div className="card">
      <div className="photo">
        <img
          alt=" "
          src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        ></img>
      </div>
      
      <div className="info">
        <h1>{props.name}</h1>
        <button>Elave et</button>
      </div>
    </div>
  );
}
export default Card;
