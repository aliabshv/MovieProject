import "./Listen.css"
function Listen({ list,setList }) {
const listInput=useRef()
   const deleteDatafromList=(title)=>{
const index=list.indexOf(title);
list.splice(index);
setList([...list]);
   }
   const gotoList=()=>{
    if(listInput.current.value.length != 0)
    console.log(listInput.current.value);
   }

    return (
        <div className="listen">
            <input rev="listInput" placeholder=" Enter list name"></input>
            <div >
                <ul className="listUl">
                    {
                        list.map(item => {
                            return (
                                <>
                                    <div className="ulDelete" style={{display: "flex"}}>
                                        <li>{item}</li>
                                        <button className="deleteBtn" style={{ width: "20px",height:"20px"  }} onClick={deleteDatafromList}>x</button>
                                    </div>

                                </>



                            )

                        })


                    }
                </ul>
                
            </div>


            <button className="saveBtn" onClick={gotoList}>Save list</button>
        </div>
    )
}
export default Listen;

