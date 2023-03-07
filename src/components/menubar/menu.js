import "./menu.css";
export function Menu({menuOpen,setMenuOpen}){
    return( 
    <div className={menuOpen ? "menu" : "menuactivate"}>
       <ul>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#works">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div> 
    )
}