// import getMovieData from "../../Services/db"
import getMovieData from "../../Services/db"
import respons from "../../Services/db"
import {useState} from "react"
import "./Form.css"


function Form() {
const[data,setData]=useState([])
    const handleSubmit = async(e) => {
        
        e.preventDefault( )
        let result =await getMovieData(e.target.formInput.value)
       setData(result) 
      console.log(respons);
        


    }

    return (

        <div className="from" >
          <form onSubmit={handleSubmit} style={{display:"flex"}}>
          <lable >Search movies by title:
                <input name="formInput"placeholder="For example: Shawshank Redemption"></input>

            </lable>
            <button type="submit">Search</button>
          </form>
          
          <ul>
            {
            
            data?.map(item=>{
                return(
                <li>{item.Title}</li>
                )
               
            })
            }
          </ul>
        </div>
    )
}

export default Form;