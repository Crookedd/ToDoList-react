import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="task_section" id="taskSection">
      <hr className="top_line" />
      {tasks.length === 0 ? (
        <p className="no_tasks" id="noTasksMessage">No tasks</p>
      ) : (
        tasks.map(task => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))
      )}
      <hr className="top_line" />
    </div>
  );
};

export default TaskList;