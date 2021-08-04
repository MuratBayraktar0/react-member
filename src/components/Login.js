import Button from "../helpers/Button";
import Input from "../helpers/Input";
import Popup from "../helpers/Popup";
import "../style/style.css"


function Login() {
    function click(test){
        alert("tiklandi")
    }
  return (
    <Popup>
        <img style={{margin:"auto"}} width="120px" src="https://account.splashtrack.com/Content/V2/img/user-login-bg.png"/>
        <h2 className="popup-title">Welcome Back!</h2>
        <Input image="https://www.planerchillers.com/assets/img/icon_person.png" placeholder="e-mail" />
        <Input type="password" image="https://cdn0.iconfinder.com/data/icons/ios-and-android-vol-2/52/055-512.png" placeholder="password" />
        <b className="login-b"><a href="forgetpassword">Forgot Password?</a></b>
        <Button onClick={() => click()}>LOG IN</Button>
        <p className="login-p">Or connect with social</p>
         <div className="login-connects">
            <Button onClick={() => click()} image="https://cdn.icon-icons.com/icons2/729/PNG/128/google_icon-icons.com_62736.png">Google</Button>
            <Button onClick={() => click()} image="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png">Facebook</Button>
        </div>
        <p className="register-goto-login">Don't have an account yet? <b className="login-b"><a href="/register">Register now</a></b></p>
    </Popup>
  );
}

export default Login;
