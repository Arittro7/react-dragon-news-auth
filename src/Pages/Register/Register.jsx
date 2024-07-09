import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {

  // const {createUser} = useContext(AuthContext);
  const {createUser} = useContext(AuthContext)

  const handleRegister = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);


    // create User
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

  return (
    <div>
    <Navbar></Navbar>

    <div className="card mx-auto bg-base-100 w-1/2 shadow-2xl">
    <h2 className="text-center text-2xl">Please Register</h2>
    <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text"  name="name" placeholder="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input type="text"  name="photo" placeholder="photo url" className="input input-bordered" required />
      </div>
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
        <button className="btn btn-primary">Register</button>
      </div>
    <p>Already have an Account <Link className="text-blue-700" to="/login" >Login</Link> </p>
    </form>
  </div>
  </div>
  );
};

export default Register;