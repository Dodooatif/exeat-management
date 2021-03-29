import { useState } from "react"
import AddStudents from "./AddStudents"
import NavBar from "./NavBar"

function Main() {
    const [show, setShow] = useState(false)

    const toggle = () =>{
        setShow(!show)
    }
    return (
        <main>
            <NavBar show={show} toggle={toggle}/>
            {show && <AddStudents />}
        </main>
    )
}

export default Main;
