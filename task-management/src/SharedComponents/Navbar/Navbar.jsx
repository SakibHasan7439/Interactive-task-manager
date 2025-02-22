import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {user, signOutUser} = UseAuth();
  const navigate = useNavigate();

  const handleSignOut = () =>{
    signOutUser()
    .then(() => {
      toast.success("successfully signout");
      navigate('/');
    })
    
    .catch((error) => {
      toast.error(error.message);
    });
  }

  return (
    <div className="bg-[#8ec0fd] mb-6">
      <div className="navbar max-w-7xl w-full mx-auto shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Task Manager</a>
        </div>
        {
          user && <button onClick={handleSignOut} className="mr-12 cursor-pointer transition duration-300 hover:bg-[#5279a9] bg-[#5f9ce7] text-white px-4 py-2 rounded-md">Logout</button>
        }
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="user photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
