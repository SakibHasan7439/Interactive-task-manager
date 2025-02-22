import UseAxios from "../../../Hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import DeleteTask from "../DeleteTask/DeleteTask";
import UpdateTask from "../UpdateTask/UpdateTask";
import Swal from "sweetalert2";

const AllTask = () => {
  const axiosAll = UseAxios();

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axiosAll.get("/task");
      return res.data;
    },
  });

  
  const handleSubmitStatusChange = async(id, newStatus) =>{
    await axiosAll.patch(`/taskStatus/${id}`, {status:newStatus})
    .then(res =>{
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                title: "Role changed",
                text: `Role changed to ${status}`,
                icon: "success"
            });
        }
    })
}

  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#1d426f] text-center text-white font-semibold">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                className="bg-[#8ec0fd] text-center border-b-4 border-black"
                key={task?._id}
              >
                <th>{task.title}</th>
                <td className="font-semibold">{task.description}</td>
                <td>
                  <select  onChange={(e)=>handleSubmitStatusChange(task._id, e.target.value)} value={task.status} className="select text-black select-bordered w-full max-w-xs">
                    <option>
                      To-Do
                    </option>
                    <option>InProgress</option>
                    <option>Done</option>
                  </select>
                </td>
                <td>
                  <details className="dropdown">
                    <summary className="btn m-1">Manage Task</summary>
                    <ul className="menu font-semibold dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <DeleteTask 
                        id={task._id}
                        refetch={refetch}>
                      </DeleteTask>
                      <UpdateTask
                        id={task._id}
                        refetch={refetch}
                        task={task}
                      ></UpdateTask>
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
