import { useContext } from 'react'
import { StudentContext } from "../context/StudentContext"

function Students() {
    const {students, dispatch} = useContext(StudentContext)
    return (
        <div style={{display:"grid", gridTemplateColumns:"2fr 2fr 2fr", gridGap:"10px", padding:"0px 100px"}}>
           {
               students.map(student => (
                   <div className="pupil">
                       <h2>{student.name}</h2>
                       <h3>{student.level}</h3>
                       <h3>{student.date}</h3>
                       <h3>{student.indexNo}</h3>
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
