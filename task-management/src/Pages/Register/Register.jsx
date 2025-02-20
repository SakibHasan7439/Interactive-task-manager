import Lottie from "lottie-react";
import register from "../../assets/registerLottie.json";
import Button from "../../Components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-7xl h-screen flex items-center justify-between flex-col-reverse md:flex-row w-full mx-auto">
      <div className="card pt-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <Button
            text={'Signin with Google'}
            className={'mx-7 flex items-center gap-2 justify-center'}
            icon={<FcGoogle className="text-xl mt-1"></FcGoogle>}>
        </Button>
        <form className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Full Name</label>
            <input type="text" className="input" placeholder="full name" />
            <label className="fieldset-label">Photo</label>
            <input type="file" className="cursor-pointer py-2 rounded-sm px-2 border-gray-400 "/>
            <label className="fieldset-label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn bg-[#8ec0fd] text-black border-none btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="pb-7 text-center">Already have an account ? <Link className=" text-blue-400" to={'/login'}>Login Now</Link></p>
      </div>
      <Lottie
        animationData={register}></Lottie>
    </div>
  );
};

export default Register;
