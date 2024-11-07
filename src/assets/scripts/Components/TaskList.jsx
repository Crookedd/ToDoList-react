import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ tasks, deleteTask, updateTask, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className="task_section"
            id="taskSection"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.length === 0 && <hr className="top_line" />}
            {tasks.length === 0 ? (
              <p className="no_tasks" id="noTasksMessage">
                No tasks
              </p>
            ) : (
              tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task
                        task={task}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            )}
            {provided.placeholder}
            {tasks.length === 0 && <hr className="top_line" />}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
