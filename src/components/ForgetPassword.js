import Button from "../helpers/Button";
import Input from "../helpers/Input";
import Popup from "../helpers/Popup";
import "../style/style.css"


function ForgetPassword() {
    function click(test){
        alert("tiklandi")
    }
  return (
    <Popup>
        <img style={{margin:"auto"}} width="150px" src="https://u12grow.com/img/forgot_password_img.svg"/>
        <h2 className="popup-title">Forget Password</h2>
        <Input image="https://www.planerchillers.com/assets/img/icon_person.png" placeholder="e-mail" type/>
        <Button onClick={() => click()}>RESET</Button>
        <p className="register-p">Already have an account? <b className="login-b"><a href="/login">Login here</a></b></p>
    </Popup>
  );
}

export default ForgetPassword;
