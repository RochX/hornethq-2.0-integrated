import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="page">
      <div className="bodyjank">
        <h1 className="Hornet-Title"> Welcome to Hornet HQ</h1>
        <div className="container2">
          <form>
            <div className="form-input">
              <label>
                Username:
                <input type="text" name="Username:" />
              </label>
              <button onClick={() => setName("Forgot Username?")}>
                Forgot Username?
              </button>
            </div>

            <div className="form-input">
              <label>
                Password:
                <input type="text" name="Password" />
              </label>
              <button onClick={() => setName("Forgot Password?")}>
                Forgot Password?
              </button>

              <Link to="/">
                <input type="submit" value="Log In" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
