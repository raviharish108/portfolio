import { useState } from "react";
import "./contact.css";
import axios from "axios";
let url="https://notes-app-lijh.onrender.com/api/send/txt"
export function Contact(){
    const[email,setemail]=useState(" ");
    const[message,setmessage]=useState(" ");
    const [busy,setbusy]=useState(false);
    const payload={"from_email":email,
                    "txt":message};
    const submitt=async()=>{
        try{
            await setbusy(false);
            const result=await axios.post(`${url}`,payload);
            await alert(result.data.msg);
           await setbusy(false)
        }catch(err){
            await alert(err.response.data.msg);
            await setbusy(false); 
    }
}
if(busy){
    <div>
        msg sending.....
    </div>
}
    return(
        <div id="contact" className="contact_container">
             <h1>Contact</h1>
             <div className="contact_middle">
             <div className="contact_left">
                <img src="assets/hand-shake.png"/>
            </div>
            <div className="contact_right">
           
            <form>
                <input type="text" placeholder="Email" onChange={(e)=>{
                    setemail(e.target.value)
                }}/>
                <textarea placeholder="Message" onChange={(e)=>{
                    setmessage(e.target.value)
                }}></textarea>
                <button onClick={(e)=>{
                    e.preventDefault();
                    submitt();
                }}>Send</button>
                <span>Thanks, I'll reply ASAP </span>
            </form>
            </div>
             </div>
          
            
        </div>
    )
}