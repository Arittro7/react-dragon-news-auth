import Header from "../../Shared/Header/Header";
import LeftSideBar from "../../Shared/LeftSideBar/LeftSideBar";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideBar from "../../Shared/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6 grid-cols-1">
        <div>
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-2">
          <h2>This is Main Content Area</h2>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
