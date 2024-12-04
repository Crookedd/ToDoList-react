import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ConfirmationModal from "./components/modals/ConfirmationModal";
import {
  addTask,
  deleteTask,
  updateTask,
  reorderTasks,
} from "./store/tasksSlice";
import "./assets/styles/main.scss";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [taskToDelete, setTaskToDelete] = React.useState(null);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (id) => {
    setTaskToDelete(id);
    setModalOpen(true);
  };

  const confirmDeleteTask = () => {
    dispatch(deleteTask(taskToDelete));
    setModalOpen(false);
  };

  const cancelDeleteTask = () => {
    setModalOpen(false);
  };

  const handleUpdateTask = (updatedTask) => {
    dispatch(updateTask(updatedTask));
  };

  return (
    <div className="container">
      <TaskForm addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        deleteTask={handleDeleteTask}
        updateTask={handleUpdateTask}
      />
      {isModalOpen && (
        <ConfirmationModal
          onConfirm={confirmDeleteTask}
          onCancel={cancelDeleteTask}
        />
      )}
    </div>
  );
};

export default App;
