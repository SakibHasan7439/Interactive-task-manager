import Swal from "sweetalert2";
import UseAxios from "../../../Hooks/UseAxios";
// eslint-disable-next-line react/prop-types
const DeleteTask = ({ id, refetch }) => {
  const axiosAll = UseAxios();
  const handleSubmitDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosAll.delete(`/task/${id}`)
        .then((res) =>{
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });  
            }
        })
      }
    });
  };
  return (
    <li
      onClick={() => handleSubmitDelete(id)}
      className="bg-red-800 mb-2 text-white"
    >
      <a>Delete</a>
    </li>
  );
};

export default DeleteTask;
