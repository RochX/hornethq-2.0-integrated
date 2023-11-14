import MainNavLayout from "../components/MainNav/MainNavLayout";
import IndexPage from "./IndexPage/IndexPage";
import Layout from "../Layout";
import { useState } from "react";

function Home({ onDataPassed }) {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleChildData = (childData) => {
    setDataFromChild(childData);
    onDataPassed(childData);
  };
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

      {!view && <IndexPage onDataPassed={handleChildData} />}
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
