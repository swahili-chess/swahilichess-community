import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import "./login.css";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <section>
      <div className="form-box">
        <div className="form-value">

          <form action="">
            <h2>Login</h2>

            <div className="inputbox">
              <input type="email" required placeholder="Email" />
            </div>

            <div className="inputbox">
              <input type="password" required placeholder="Password" />
            </div>

            <div class="forget">
              <label for="">
                <input type="checkbox" />
                Remember Me |
                <a href="#"> Forget Password</a>
              </label>
            </div>

            <button onClick={handleLogin}>Login</button>
          </form>

          <div className="register">
            <p>
              <div>Don't have an account?
                <Link to="/register">
                  <a> Register</a>
                </Link> </div>
            </p>
          </div>

        </div>
      </div>
    </section>

    /*<div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
  </div>*/
  );
};

export default Login;
