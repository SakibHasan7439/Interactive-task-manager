import ShowUpdateModal from "./ShowUpdateModal";
/* eslint-disable react/prop-types */
const UpdateTask = ({ id, refetch, task }) => {
  const {title, description} = task;
  return (
    <li onClick={() => document.getElementById(`my_modal_${task._id}`).showModal()}className="bg-orange-400 text-white">
      <a>Update</a>
      <ShowUpdateModal
        refetch={refetch}
        title={title}
        description={description}
        id={id}
        taskId={task._id}
      ></ShowUpdateModal>
    </li>
  );
};

export default UpdateTask;
