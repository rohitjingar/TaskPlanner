// Importing necessary modules and styles
import React, { useState } from 'react';
import './TaskCard.css';

// TaskCard component definition
const TaskCard = ({ task, onEdit, onDelete, statusColor }) => {
  // Destructuring task object
  const { title, description, startDate, endDate, status, assignee, priority } = task;
  
  // State variable to manage visibility of options popup
  const [showOptions, setShowOptions] = useState(false);
  
  // Handling status display
  let updated_status;
  if(status === "Pending"){
    updated_status = "Assign";
  } else {
    updated_status = status;
  }

  // Function to handle edit task action
  const handleEdit = () => {
    setShowOptions(false);
    onEdit(task);
  };

  // Function to handle delete task action
  const handleDelete = () => {
    setShowOptions(false);
    onDelete(task);
  };
  
  return (
    <div className="task-card">
      {/* Task header */}
      <div className="task-header">
        <h2 className="title">{title}</h2>
        {/* Options button */}
        <div className="options" onClick={() => setShowOptions(!showOptions)}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      {/* Horizontal line */}
      <div className='line'></div>
      {/* Task description */}
      <p className="description">{description}</p>
      {/* Task details */}
      <div className="details">
        {/* Task status */}
        <p className='status' style={{ backgroundColor: statusColor, color:'white' }}>{updated_status}</p>
        {/* Assignee */}
        <p className='assign-person'>@{assignee}</p>
        {/* Task priority */}
        <p className='priority'>{priority}</p>
      </div>
      {/* Options popup */}
      {showOptions && (
        <div className="options-popup">
          {/* Edit option */}
          <div onClick={handleEdit}>Edit</div>
          {/* Delete option */}
          <div onClick={handleDelete}>Delete</div>
          {/* Close option */}
          <div onClick={()=>setShowOptions(false)}>Close</div>
        </div>
      )}
    </div>
  );
};

// Exporting TaskCard component
export default TaskCard;
