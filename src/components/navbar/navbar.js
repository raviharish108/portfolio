import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import "./navbar.css";
export function Navbar({menuOpen,setMenuOpen}){
   
    return(
        <div className="navbar_container">
            <div className={menuOpen ? "wrapper" : "wrapperactive"}>
               <div className="left"><a  href="#intro" className="logo">Ravindran</a>
                    <div className="item_container">
                         <PersonIcon className='icon'/>
                        <span>+65 9038 3992</span>
                    </div>
                    <div className="item_container">
                        <MailIcon className='icon'/>
                         <span>raviharish108@gmail.com</span>
                    </div>
                    </div> 
                    <div className="right">
                         <div className="right_container" >
                            <span> {menuOpen? <MenuIcon onClick={()=>setMenuOpen(!menuOpen)}/>:<CloseIcon onClick={()=>setMenuOpen(!menuOpen)}/>}</span>
                         </div>
                     </div>       
             </div>
         </div>
    )
}