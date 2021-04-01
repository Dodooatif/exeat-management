import { useContext } from 'react'
import { StudentContext } from "../context/StudentContext"

function Students() {
    const {students, dispatch} = useContext(StudentContext)
    return (
        <div style={{display:"grid", gridTemplateColumns:"2fr 2fr 2fr", gridGap:"10px", padding:"0px 100px"}}>
           {
               students.map(student => (
                   <div className="pupil">
                       <h2>NAME:  {student.name}</h2>
                       <h3>LEVEL:  {student.level}</h3>
                       <h3>DATE:  {student.date}</h3>
                       <h3>INDEXNO:  {student.indexNo}</h3>
                       <button onClick={()=>dispatch({type:"DELETE", indexNo:student.indexNo})}>
                           CLOSE
                        </button>
                   </div>
               ))
           }
        </div>
    )
}

export default Students;
