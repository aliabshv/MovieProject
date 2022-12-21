// import getMovieData from "../../Services/db"
import getMovieData from "../../Services/db"

import { useState } from "react"
import Card from "../Card/Card"
import "./Form.css"


const Form=({setList,list})=> {
  const [data, setData] = useState([])

     const handleSubmit = async (e) => {
      // functiondisableButton()
    e.preventDefault()
    if(e.target.formInput.value){
 let result = await getMovieData(e.target.formInput.value)
    setData(result)
    }
   
  
  }
 


  return (

    <div className="from" >
      
      <div>
        <div >
          <form onSubmit={handleSubmit} style={{ display: "flex" }}>
            <lable >Search movies by title:
              <input id="inptId" name="formInput" placeholder="For example: Shawshank Redemption" ></input>

            </lable>
            <button type="submit" className="formButton">Search</button>
          </form>
        </div>
        <div >
          <Card movieData={data} setList={setList} list={list} />

        </div>
      </div>
      



    </div>

  )
}

export default Form;