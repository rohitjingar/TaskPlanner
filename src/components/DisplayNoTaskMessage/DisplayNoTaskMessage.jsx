// Import necessary modules and styles
import React from 'react';
import './DisplayNoTaskMessage.css';

// DisplayNoTaskMessage component definition
function DisplayNoTaskMessage({ category, onClose }) {
  // Render message indicating no tasks in the specified category
  return (
    <div className='no-task-message-container'>
      <div className="no-task-message">
        {/* Message indicating no tasks in the category */}
        <p>There are no tasks in the "{category}" category.</p>
        {/* Button to close the message */}
        <button className="close-button" onClick={onClose}>
          &#10005;
        </button>
      </div>
    </div>
  );
}

// Export DisplayNoTaskMessage component
export default DisplayNoTaskMessage;
