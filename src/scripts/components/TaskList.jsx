import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import { reorderTasks } from '../../store/tasksSlice';

const TaskList = ({ tasks, deleteTask }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(reorderTasks({ sourceIndex: result.source.index, destinationIndex: result.destination.index }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            className="task_section"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.length === 0 && <hr className="top_line" />}
            {tasks.length === 0 ? (
              <p className="no_tasks">No tasks</p>
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
                      <Task task={task} onDelete={deleteTask} />
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
