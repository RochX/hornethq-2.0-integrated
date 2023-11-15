import MainNavLayout from "../components/MainNav/MainNavLayout";
import LiberalArtsTracker from "../components/LiberalArtsTracker/LiberalArtsTracker";

function Academics() {
    return (
      <div className="academics">
        <h1>Academics Page</h1>
        <br />
        <h2>Progress Within The Liberal Arts</h2>
        <LiberalArtsTracker />
        <br />
        <h2>Navigation</h2>
        <MainNavLayout id="academics" />
      </div>
    );
}

export default Academics;