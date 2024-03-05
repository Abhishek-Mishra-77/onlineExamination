import { useNavigate } from "react-router-dom";
import logincss from "./login.module.css";
const Login = () => {
    const navigate=useNavigate()
    const loginHandler=()=>{
        navigate("/instructions")
    }
  return (
    <div className={logincss.main}>
      <div className={logincss.container}>
        <div className={logincss.title}>login form</div>
        <div className={logincss.inputField}>
          <input placeholder="email id"></input>
        </div>
        <div className={logincss.inputField}>
          <input placeholder="password"></input>
        </div>
        <div className={logincss.loginBtn}>
          <div onClick={loginHandler}>login now</div>
        </div>
      </div>
    </div>
  );
};
export default Login;
