import "./intro.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export function Intro() {
 
    return (
     <div id="intro" className="intro_container">
       <div className="left_intro">
            <div className="imgcontainer">
                <img src="assets/ravi-removebg-preview.png" alt=""  className="img"/>
             </div>
      </div>
       <div className="right_intro">
         <div className="wrapper_intro">
          <h2>Hi There, I'm</h2>
          <h1>Ravi</h1>
          <h3>
            Full Stack Developer
          </h3>
          <p>I am a software developer entry level professional  and interesting to learn web technology and software development</p>
         <div>
         <span className="icon"><a href="https://www.instagram.com/raviharish108/"><InstagramIcon/></a></span>
         <span className="icon"><a href="https://www.linkedin.com/in/ravindran-ravi-280a60241/"><LinkedInIcon/></a></span>
         <span className="icon"><a href="https://github.com/raviharish108/"><GitHubIcon/></a></span>
          </div>
          <div>
            <button className="intro_button"><a href="#contact">Connect With Me</a></button>
            <button className="intro_button" ><a href="https://drive.google.com/file/d/1cfp-asL8wqlvPR9fs-KGkNBEVpKI2Zgv/view?usp=share_link">My CV</a></button>
          </div>
        </div>
        <a href="#portfolio" className="arrow">
          <img src="assets/down.png" alt="" />
        </a> 
      </div> 
     </div>
    );
  }
  