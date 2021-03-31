import { useState } from "react"
import AddStudents from "./AddStudents"
import NavBar from "./NavBar"

function Main() {
    const [show, setShow] = useState(false)

    const toggle = () =>{
        setShow(!show)
    }
    return (
        <>
        <NavBar show={show} toggle={toggle}/>
        <main style={{display:"flex",justifyContent:"center", width:"100%"}}>

            {show && <AddStudents />}
        </main>
        </>
    )
}

export default Main;
