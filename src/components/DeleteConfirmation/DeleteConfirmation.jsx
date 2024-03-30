// Import necessary modules and styles
import React from 'react';
import './DeleteConfirmation.css';

// DeleteConfirmation component definition
const DeleteConfirmation = ({ task, onConfirm, onCancel }) => {
  // Render confirmation dialog
  return (
    <div className="delete-confirmation">
      <div className="confirmation-box">
        {/* Confirmation title */}
        <h2>Delete Task</h2>
        {/* Task deletion confirmation message */}
        <p>Are you sure you want to delete the task "{task.title}"?</p>
        {/* Confirmation buttons */}
        <div className="buttons">
          <button onClick={onConfirm}>Confirm</button> {/* Button to confirm task deletion */}
          <button onClick={onCancel}>Cancel</button> {/* Button to cancel task deletion */}
        </div>
      </div>
    </div>
  );
};

// Export DeleteConfirmation component
export default DeleteConfirmation;
