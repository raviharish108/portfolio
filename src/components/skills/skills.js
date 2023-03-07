import "./skills.css";
export function Skills(){
    return(
        <div id="skills" className="skills_container">
         <h1>Skills</h1>
         <div className="skills">
            <Container url="assets/HTML5.png"/>
            <Container url="assets/CSS3.png"/>
            <Container url="assets/javaScript.png"/>
            <Container url="assets/react.png"/>
            <Container url="assets/nodejs.png"/>
            <Container url="assets/express.png"/>
            <Container url="assets/mongodb.png"/>
         </div>
        </div>
    )
}
function Container({url}){
    return(
        <div className="skill_item">
            <img
              src={url}
              alt=""
            />
            </div>
    )
}