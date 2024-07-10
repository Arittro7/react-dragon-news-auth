import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import RightSideBar from "../../Shared/RightSideBar/RightSideBar";

const News = () => {
  const [singleNewsData, setSingleNewsData] = useState({});
  const { id } = useParams();
  const news = useLoaderData();

  useEffect(() =>{
    const singleNews = news.find(data => data._id === id);
    setSingleNewsData(singleNews)
  },[news , id])

  const {image_url, title, details} = singleNewsData || {};

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-5">
      <div className="col-span-3">
        <img src={image_url} alt="" />
        <h2 className="text-2xl font-semibold my-2">{title}</h2>
        <p>{details}</p>
      </div>
      <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default News;
