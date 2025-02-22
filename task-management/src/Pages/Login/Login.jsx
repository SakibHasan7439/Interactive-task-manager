import Lottie from "lottie-react";
import register from "../../assets/registerLottie.json";
import Button from "../../Components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import UseAxios from "../../Hooks/UseAxios";

const Login = () => {
  const {googleSign, signinUser} = UseAuth();
  const axiosAll = UseAxios();
  const navigate = useNavigate();

  const handleSignIn = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signinUser(email, password)
    .then(() =>{
        toast.success("successfully logged in");
        navigate('/home');
    })    

    .catch(error =>{
        toast.error(error.message);
    })
} 

const handleGoogleSign = () =>{
    googleSign()
    .then((result) =>{
        const userInfo = {
            name: result.user?.displayName,
            email: result.user?.email
        };

        axiosAll.post("/users", userInfo)
        .then(() =>{
            toast.success("successfully registered");
            navigate("/home");
        })
    })
    .catch((error) =>{
        toast.error(error.message);
    })
}
  return (
    <div className="max-w-7xl h-screen flex items-center justify-between flex-col-reverse md:flex-row w-full mx-auto">
      <div className="card pt-4 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <Button
            onclick={handleGoogleSign}
            text={'Signin with Google'}
            className={'mx-7 flex items-center gap-2 justify-center'}
            icon={<FcGoogle className="text-xl mt-1"></FcGoogle>}></Button>
        <form onSubmit={handleSignIn} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <button className="btn bg-[#8ec0fd] text-black border-none btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="pb-7 text-center">New to this website ? <Link className=" text-blue-400" to={'/register'}>Register Now</Link>
        </p>
      </div>
      <Lottie
        animationData={register}></Lottie>
    </div>
  );
};

export default Login;
