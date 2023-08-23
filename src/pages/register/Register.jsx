import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <section>
      <div class="form-box">
        <div class="form-value">
          <form action="">

            <h2>Sign Up</h2>

            <div class="inputbox">
              <input type="email" required placeholder="Email" />
            </div>

            <div class="inputbox">
              <input type="tel" required placeholder="Phone number" />
            </div>

            <div class="inputbox">
              <input type="password" required placeholder="Password" />
            </div>

            <div class="forget">
              <label for="">
                <input type="checkbox" required />
                Terms and Privacy
              </label>
            </div>

            <button>Sign Up</button>
          </form>

          <div class="register">
            <div>
              <p>Have an account?
                <Link to="/login"> Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    /*<div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>*/
  );
};

export default Register;
