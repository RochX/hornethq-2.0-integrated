import MainNavLayout from "../components/MainNav/MainNavLayout";
import IndexPage from "./IndexPage/IndexPage";
import { useState } from "react";

function Home() {
  const [view, setView] = useState(false);

  const color = () => {
    let className = "homeButton";
    className += view ? " dashboard " : " simple ";
    return className;
  };

  return (
    <div className="home">
      <div className="homeButton-container">
        <button className={color()} onClick={() => setView(!view)}>
          {view ? "Dashboard" : "Simple view"}
        </button>
      </div>

      {!view && <IndexPage />}
      {view && (
        <div>
          <h1>Home Page</h1>
          <MainNavLayout id="home" />
        </div>
      )}
    </div>
  );
}

export default Home;
