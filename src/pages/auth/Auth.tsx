import { useState } from "react";
import AnimatedBorder from "../../components/animated-border";
import "./Auth.css";
// import AuthFooter from "../../icons/AuthFooter.js";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.js";
import SvgLogin from "../../icons/SvgLogin.js";
import SvgWeb from "../../icons/SvgWeb.js";
import AuthFooter from "../../icons/AuthFooter.js";

const Auth = () => {
  const [fromType, setFromType] = useState("login");

  return (  
    <div className="auth ">
      <AnimatedBorder>     
        <div className="auth-container">
          <SvgLogin /> 
          <div className="auth-line"></div> 
          <div className="auth-switch"> 
            <button
              className={`auth-btn ${fromType === "login" ? "auth-switch-btn-active" : "" }`}
              onClick={() => setFromType("login")} > ورود
            </button>
            <button
              className={`auth-btn ${fromType === "register" ? "auth-switch-btn-active" : "" }`}
              onClick={() => setFromType("register")} > ثبت
            </button>
          </div>
        </div>

        {fromType === "login" && <LoginForm />}
        {fromType === "register" && <RegisterForm />}
      </AnimatedBorder>
      <footer>
        <AuthFooter className="auth-footer-svg" />
        <div className="flex flex-row items-center justify-center gap-1">
          <a 
              href="https://ghoncheataei-portfolio.vercel.app/"
              target="_blank" // باز شدن در تب جدید (تجربه کاربری بهتر)
              rel="noopener noreferrer" // امنیت بیشتر وقتی target="_blank" داری
              className="text-gray-500 hover:text-gray-400 hover:underline transition-colors">Ghonche Ataei Developer</a>
          <SvgWeb className="w-16 h-16"/>
        </div>
      </footer>
    </div>
  );
};

export default Auth;
