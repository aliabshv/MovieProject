
import "./Card.css";
function Card({movieData,setList,list}) {

const sendFilm=(title)=>{
  let result=list.includes(title)
if(!result){
 setList([...list,title])
}
    
 

  

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
          src={item.Poster} className="cardImg"
        ></img>
      </div>
      
      <div className="info">
        <h1>{item.Title}</h1>
        <button className="cardButton" onClick={()=>{sendFilm(item.Title)}}>Elave et</button>
      </div>
      
    </div>
    )
  })
 }
   </>
  

    
  );
}
export default Card;

