import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="task_section" id="taskSection">
      {tasks.length === 0 && <hr className="top_line" />}
      {tasks.length === 0 ? (
        <p className="no_tasks" id="noTasksMessage">No tasks</p>
      ) : (
        tasks.map(task => (
          <Task key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>
        ))
      )}
      {tasks.length === 0 && <hr className="top_line" />}
    </div>
  );
};

export default TaskList;