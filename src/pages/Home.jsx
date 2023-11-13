import MainNavLayout from "../components/MainNav/MainNavLayout";
import IndexPage from "./IndexPage/IndexPage";

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <IndexPage />
      <MainNavLayout id="home" />
    </div>
  );
}

export default Home;
