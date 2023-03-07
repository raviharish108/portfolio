import "./works.css";
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
        <Work link="https://enchanting-muffin-2716fa.netlify.app/" url="https://assets.artifactuprising.com/assets/campaigns/2020/Q3/08-01+Photo+Projects+Blog/PhotoProjectIdeas-GratitudeJournal.jpg" desc="this application is usefull for a store any notes and you can use as a diary. "/>
        <Work link="https://stunning-kulfi-7efbbf.netlify.app/" url="https://appinventiv.com/wp-content/uploads/sites/1/2016/10/Banner-16.webp" desc="this application is useful for the before you going to reach your home page you can register and password reset"/>
        <Work link="https://lively-pudding-8001a2.netlify.app/" url="https://assets.entrepreneur.com/content/3x2/2000/20190706133221-FotoJet1.jpeg" desc="this application is usefull for the school management crud operation "/>
      </div>

    </div>
    )
}

 function Work({link,url,desc}){
    return(
       <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={url} alt="" className="p-img" />
      </a>
      <p className="pl-desc">
          {desc}
        </p>
    </div>
    )
}