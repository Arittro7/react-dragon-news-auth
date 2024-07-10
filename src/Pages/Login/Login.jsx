import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    // sign in user
    signIn(email, password)
    .then(result =>{
      console.log(result.user);
      // navigate after login
      navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
      console.error(error)
    })
  }
  
  return (
    <div>
      <Navbar></Navbar>

      <div className="card mx-auto bg-base-100 w-1/2 shadow-2xl">
      <h2 className="text-center text-2xl">Please Login</h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      <p>Do not have an Account<Link className="text-blue-700" to="/register" > Register</Link> </p>
      </form>
    </div>
    </div>
  );
};

export default Login;