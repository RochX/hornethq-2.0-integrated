import MainNavLayout from "../components/MainNav/MainNavLayout";
import IndexPage from "./IndexPage/IndexPage";

function Home() {
  return (
    <div>
      <IndexPage />
      <MainNavLayout id="home" />
    </div>
  );
}

export default Home;
