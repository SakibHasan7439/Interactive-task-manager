import Swal from "sweetalert2";
import UseAxios from "../../../Hooks/UseAxios";

// eslint-disable-next-line react/prop-types
const ShowUpdateModal = ({refetch,  title, description, id, taskId}) => {
    console.log(id);
    const axiosAll = UseAxios();
    const handleSubmitTaskUpdate = async(e, id) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.taskTitle.value;
        const description = form.description.value;
        const taskInfo = {title, description};
        const taskUpdate = await axiosAll.patch(`/task/${id}`, taskInfo);

        if(taskUpdate.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                title: "Task update",
                text: `Task update successful`,
                icon: "success"
            });
            document.getElementById(`my_modal_${taskId}`).close();
        }
    }

    return (
        <dialog id={`my_modal_${taskId}`} className="modal sm:modal-middle">
        <div className="modal-box text-black">
          <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmitTaskUpdate(e, id)}}>
            <label className="text-xl font-semibold">Task Title</label>
            <input
              className="w-full p-2 my-2 border"
              placeholder="Title in 50 character"
              defaultValue={title}
              type="text"
              maxLength={50}
              name="taskTitle"
              id=""
            />
            <label className="text-xl font-semibold">Task description</label>
            <textarea
              name="description"
              defaultValue={description}
              className="w-full h-24 p-2 my-2 border"
              maxLength={200}
              placeholder="write your description in 200 character"
              id=""
            ></textarea>
            <input
              type="submit"
              value={'Update'}
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
    );
};

export default ShowUpdateModal;