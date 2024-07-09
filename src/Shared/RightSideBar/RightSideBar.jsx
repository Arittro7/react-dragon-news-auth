import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideBar = () => {
  return (
    <div>
      <div className="border border-red-400 space-y-4 p-3">
      <h2 className="text-2xl font-semibold">Login with</h2>
      <div>
        <button className="btn w-full"> <FaGoogle></FaGoogle>
          Login with Google</button>
      </div>
      <div>
        <button className="btn w-full"> <FaGithub></FaGithub>
          Login with Github</button>
      </div>
    </div>
    {/* Find us */}
      <div className="border border-red-400 space-y-4 p-5">
      <h2 className="text-2xl font-semibold">Find Us</h2>
      <div>
        <a className="flex items-center " href=""><FaFacebook></FaFacebook> <span className="ml-3">Facebook</span></a>
      </div>
      <div>
        <a className="flex items-center " href=""><FaTwitter></FaTwitter> <span className="ml-3">Twitter</span></a>
      </div>
      <div>
        <a className="flex items-center " href=""><FaInstagram></FaInstagram> <span className="ml-3">Instagram</span></a>
      </div>
    </div>
    {/* Q-zone */}
    <img src={qzone1} alt="" />
    <img src={qzone2} alt="" />
    <img src={qzone3} alt="" />
    </div>
  );
};

export default RightSideBar;
