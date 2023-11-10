import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 Page Not Found</h2>
      <Link to="/home">Go back to Home page.</Link>
    </div>
  );
}

export default NotFound;
