import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import UseAxios from "../../Hooks/UseAxios";

// eslint-disable-next-line react/prop-types
const AddTaskButton = ({ onclick }) => {
    const {user} = UseAuth();
    const axiosAll = UseAxios();

    const handleTaskSubmit = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.taskTitle.value;
        const description = form.description.value;
        const userEmail = user?.email;
        const taskInfo = {title, description, userEmail};
        const taskResponse = await axiosAll.post('/tasks', taskInfo);
        console.log(taskResponse.data.insertedId);
        if(taskResponse?.data?.insertedId !== undefined){
            form.reset();
            toast.success("Data stored successfully");
            document.getElementById("my_modal_5").close();
        }
    }
  return (
    <div>
      <div
        onClick={onclick}
        className="h-20 w-[200px] bg-[#8ec0fd] flex items-center justify-center text-xl font-bold cursor-pointer"
      >
        Add Task
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleTaskSubmit}>
            <label className="text-xl font-semibold">Task Title</label>
            <input
              className="w-full p-2 my-2 border"
              placeholder="Title in 50 character"
              type="text"
              maxLength={50}
              name="taskTitle"
              id=""
            />
            <label className="text-xl font-semibold">Task description</label>
            <textarea
              name="description"
              className="w-full h-24 p-2 my-2 border"
              maxLength={200}
              placeholder="write your description in 200 character"
              id=""
            ></textarea>
            <input
              type="submit"
              className="px-4 cursor-pointer py-2 rounded-sm bg-[#8ec0fd] hover:bg-[#7dafec]"
            />
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddTaskButton;
