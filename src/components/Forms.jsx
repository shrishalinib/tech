import "./forminput.css";

import fb from"../img/fb.png";
import twit from"../img/twit.png";


function Forms() {
    return (
        <div className="outer">
        
                <div className="container">
                <div className="forminput">
                <div className="login">Login</div>
            <input type="text" className="inputtype" placeholder="Enter your E-mail"/>
            <hr className="hrline" color="red"></hr>
            <input type="text"  className="inputtype" placeholder="Enter your Password"/>
            <hr className="hrline" color="red"></hr>

            <button className="button">Continue</button>
            <p className="text"> or connect with social media</p>


            <button className="twitter" >
              <img src ={twit} alt="twit " className='photo'/>
               <span className="text1"> Signin With Twitter </span>
                </button>


            <button className="facebook"> 
            <img src ={fb} alt="fb " className='photo'/>
            <span className="text2"> Signin With Facebook</span>
                </button>
            </div>
            
        </div></div>
    );
}

export default Forms;