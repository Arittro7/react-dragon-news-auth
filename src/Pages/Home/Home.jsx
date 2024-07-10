import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideBar from "../../Shared/LeftSideBar/LeftSideBar";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideBar from "../../Shared/RightSideBar/RightSideBar";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {

  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6 grid-cols-1">
        <div>
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-2 text-2xl font-semibold mb-2">
          <h2>Dragon News Home</h2>
         <div className='space-y-4'>
         { 
            news.map(aNews => <NewsCard
            key={aNews._id}
            news={aNews}>
            </NewsCard>)
          }
         </div>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
