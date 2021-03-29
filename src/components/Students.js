import { useContext } from 'react'
import { StudentContext } from "../context/StudentContext"

function Students() {
    const {students, dispatch} = useContext(StudentContext)
    return (
        <div>
           {
               students.map(student => (
                   <div className="card" style={{border:"3px solid green", width:"25%", borderRadius:"5px 7px", margin:"15px"}}>
                       <h2>{student.name}</h2>
                       <h3>{student.level}</h3>
                       <h3>{student.date}</h3>
                       <button onClick={()=>dispatch({type:"DELETE", indexNo:student.indexNo})}>
                           X
                        </button>
                   </div>
               ))
           }
        </div>
    )
}

export default Students;
