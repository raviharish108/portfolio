import "./works.css";
import GitHubIcon from '@mui/icons-material/GitHub';
export function Works(){
    return(
       <div id="works" className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Ravi Projects</h1>
        <p className="pl-desc">
          it's a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        <Work link="https://enchanting-muffin-2716fa.netlify.app/" url="https://assets.artifactuprising.com/assets/campaigns/2020/Q3/08-01+Photo+Projects+Blog/PhotoProjectIdeas-GratitudeJournal.jpg" desc="This application is usefull for a store  any notes and you can use as a diary. " giturl="https://github.com/raviharish108?tab=repositories"/>
        <Work link="https://stunning-kulfi-7efbbf.netlify.app/" url="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7886.jpg" desc="This application is mainly focus on the Password Reset." giturl="https://github.com/raviharish108/password_reset"/>
        <Work link="https://lively-pudding-8001a2.netlify.app/" url="https://assets.entrepreneur.com/content/3x2/2000/20190706133221-FotoJet1.jpeg" desc="This application is usefull for the school management admission " giturl="https://github.com/raviharish108/school-management"/>
      </div>

    </div>
    )
}

 function Work({link,url,desc,giturl}){
    return(
       <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={url} alt="" className="p-img" />
      </a>
      <a href={giturl}><GitHubIcon/></a>
      <p className="pl-desc">
          {desc}
        </p>
    </div>
    )
}