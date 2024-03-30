// Import necessary modules and styles
import React from 'react';
import './TaskAddedMessage.css';

// TaskAddedMessage component definition
function TaskAddedMessage({ onClose }) {
  return (
    <div className="task-added-message">
      {/* Close button */}
      <button onClick={onClose}>&times;</button>
      {/* Success message */}
      <p>Your task has been successfully added to the pending category.</p>
    </div>
  );
}

// Export TaskAddedMessage component
export default TaskAddedMessage;
