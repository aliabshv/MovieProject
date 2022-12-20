
import "./Card.css";
function Card({movieData}) {

 function  sendFilm(){
console.log('alma');
}



  return (
   <>  
 {
  movieData.map(item=>{
    return(
      <div className="card">
      <div className="photo">
        <img
          alt=" "
          src={item.Poster}
        ></img>
      </div>
      
      <div className="info">
        <h1>{item.Title}</h1>
        <button className="cardButton" onSubmit={sendFilm}>Elave et</button>
      </div>
      
    </div>
    )
  })
 }
   </>
  

    
  );
}
export default Card;
