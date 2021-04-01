function NavBar({ show, toggle }) {
    return (
        <nav>
            <div>
                <h1 style={{backgroundColor:"teal", display:"flex", justifyContent:"center", alignItems:"center",height:"15vh", color:"white"}}>REGISTRATION</h1>
            </div>
            <button className="bttn" onClick={toggle}>{ show ? "CLOSE" : "ADD" }</button>
        </nav>
    )
}

export default NavBar;
