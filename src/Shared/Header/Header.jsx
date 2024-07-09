import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div>
      <div className="text-center space-y-2">
        <img className="mx-auto mt-2" src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D YYYY")}</p>
      </div>
      <div className="flex mt-4">
        <button className="bg-red-500 py-2 px-6 mr-3 rounded-sm text-white">Latest</button>
        <Marquee className="font-semibold" pauseOnHover={true}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
      </div>
    </div>
  );
};

export default Header;
