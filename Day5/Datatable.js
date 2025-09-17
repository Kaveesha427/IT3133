
import { useState } from "react";
import Student from "./Student";

function Datatable(params){
    const [greet,setGreet]=useState("Hello React");
    const [count,setCount]=useState(0);
    const students=params.studata
    
   
    return(
        <>
        <h1>{greet}</h1>
        <button onClick={()=> {setGreet("Hello students")}}>Change Heading</button>
        <h2>{count}</h2>
        <button onClick={()=> {setCount(count+1)}}>Increase</button>
        <table border={1} cellspacing={0}>
          
            <tr>
                <th>id</th>
                <th>name</th>
                <th>course</th>
            </tr>
          
            {students.map(s=>
            //<Student detail={s} />
                <Student id={s.id} name={s.name} course={s.course} />
            )}
        </table>
        </>
    )
}
export default Datatable;
