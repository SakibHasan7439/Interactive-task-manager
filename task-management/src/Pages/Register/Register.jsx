import Lottie from "lottie-react";
import registerLotti from "../../assets/registerLottie.json";
import Button from "../../Components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import UseAxios from "../../Hooks/UseAxios";

const Register = () => {
  const { registerNewUser, googleSign, updateUserProf } = UseAuth();
  const navigate = useNavigate();
  const axiosAll = UseAxios();
  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const onSubmit = async(value) => {

      const image = value.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);

      if(!data.data.display_url){
        throw new Error('image upload failed');
      }

      const image_url = data.data.display_url;

      registerNewUser(value.email, value.password)
      .then(() =>{
          updateUserProf(value.name, image_url)
          .then(()=>{
              const userInfo = {
                  name: value.name,
                  email: value.email
              };
              
              axiosAll.post("/users", userInfo)
              .then((res) =>{
                  if(res.data.insertedId){
                      toast.success("registered successful");
                      navigate('/home');
                      reset();
                  }
              })
          })
      })
      .catch((error) =>{
          toast.error(error.message);
      })
  };

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
      <div className="card pt-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <Button
            onclick={handleGoogleSign}
            text={'Signin with Google'}
            className={'mx-7 flex items-center gap-2 justify-center'}
            icon={<FcGoogle className="text-xl mt-1"></FcGoogle>}>
        </Button>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Full Name</label>
            <input 
              {...register("name", { required: true })}
              type="text" className="input"
              placeholder="full name" />
              {errors.name && (
                  <span className="text-red-600">This field is required</span>
              )}

            <label className="fieldset-label">Photo</label>
            <input 
              {...register("image", { required: true })}
              accept="image/*"
              type="file" className="cursor-pointer py-2 rounded-sm px-2 border-gray-400 "/>

            <label className="fieldset-label">Email</label>
            <input type="email" 
            {...register("email", { required: true })}
            className="input" placeholder="Email" />
            {errors.name && (
                  <span className="text-red-600">This field is required</span>
            )}

            <label className="fieldset-label">Password</label>
            <input type="password" 
              className="input" placeholder="Password"
              {...register("password", { 
                required: true, 
                minLength:6,
                pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/ 
              })} />
              {errors.password?.type === "required" && (
                  <span className="text-red-600">Password must required</span>
              )}
              {errors.password?.type === "minLength" && (
                  <span className="text-red-600">Password must be more then 6 characters long</span>
              )}
              {errors.password?.type === "pattern" && (
                  <span className="text-red-600">Password must contain at least a uppercase and a special character</span>
              )}

            <button className="btn bg-[#8ec0fd] text-black border-none btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="pb-7 text-center">Already have an account ? <Link className=" text-blue-400" to={'/login'}>Login Now</Link></p>
      </div>
      <Lottie
        animationData={registerLotti}></Lottie>
    </div>
  );
};

export default Register;
