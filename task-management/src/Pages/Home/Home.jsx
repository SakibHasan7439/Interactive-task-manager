import Navbar from "../../SharedComponents/Navbar/Navbar";
import AddTaskButton from "./AddTaskButton";
import AllTask from "./AllTasks/AllTask";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl w-full mx-auto">
        <AddTaskButton
          onclick={() => document.getElementById("my_modal_5").showModal()}
        ></AddTaskButton>
        <AllTask></AllTask>
      </div>
    </div>
  );
};

export default Home;
