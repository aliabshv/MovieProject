import { useState } from "react";
import Form from "../../components/Form/Form";

import Listen from "../../components/Listen/Listen";
import "./Home.css"
function Home() {
    const [list,setList]=useState([])
    return (
        <>
            <div className="home">
                <div><Form setList={setList} list={list}/></div>
                <div><Listen list={list} setList={setList}/> </div>
               
               
               
                
            </div>

        </>

    )
}
export default Home;