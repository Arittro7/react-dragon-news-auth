import { Link } from "react-router-dom";
import userForLogin from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

  const navLink = <>
  <li> <Link to={'/'}>Home</Link> </li>
  <li> <Link to={'/about'}>About</Link> </li>
  <li> <Link to={'/career'}>Career</Link> </li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <img className="w-10 mr-3" src={userForLogin} alt="" />
        {
          user ? 
          <button onClick={handleSignOut} className="btn px-6 bg-black text-white">Sing out</button>
          : <Link to={'/login'} className="btn px-6 bg-black text-white">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
