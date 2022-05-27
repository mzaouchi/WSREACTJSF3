import { CompA, CompB } from "./CompA"
import Olfa from "../2.webp"

const Ares=()=>{ 
    var name = "Gomycode"
    return(
        <div>
            <h1>{name.length}</h1>
             <CompA/>
            <CompB/>
            <h1>Djeja</h1>
            <h1>Sardouk</h1>
            <h2 style={{color :'red', textDecoration :'underline'}}>My name Mahmoud</h2>
            <img src="/1.jpg"/>
            <img src={Olfa}/>
           
        </div>
    )
}

export default Ares