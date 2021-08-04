import { check } from "prettier";
import Button from "../helpers/Button";
import Input from "../helpers/Input";
import Popup from "../helpers/Popup";
import "../style/style.css"


function Register() {
    function click(test){
        alert("tiklandi")
    }
  return (
    <Popup>
        <img style={{margin:"auto"}} width="180px" src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg?size=338&ext=jpg&ga=GA1.2.926030783.1624665600"/>
        <h2 className="popup-title">Register</h2>
        <div className="login-connects">        
            <Input placeholder="name" />
            <Input placeholder="surname" />
        </div>
        <Input placeholder="e-mail" />
        <div className="login-connects">        
            <Input placeholder="password" type="password"/>
            <Input placeholder="confirm password" type="password"/>
        </div>
        <Input placeholder="phone numbar" type="number"/>
        <div className="register-agreement">
           <input type="checkbox" defaultChecked={false} />
            I have read and accepted the Membership Agreement and Data Privacy.
        </div>
        <Button onClick={() => click()}>REGISTER</Button>
        <p className="register-p">Or connect with ...</p>
         <div className="login-connects">
            <Button onClick={() => click()} image="https://cdn.icon-icons.com/icons2/729/PNG/128/google_icon-icons.com_62736.png">Google</Button>
            <Button onClick={() => click()} image="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png">Facebook</Button>
        </div>
        <p className="register-goto-login">Already have an account? <b className="login-b"><a href="/login">Login here</a></b></p>
    </Popup>
  );
}

export default Register;
