// Import necessary modules and styles
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './EditTaskForm.css';

// EditTaskForm component definition
const EditTaskForm = ({ task, onSubmit, onCancel }) => {
  // Define state variables for editedTask and initial status
  const [editedTask, setEditedTask] = useState({ ...task });
  const [initialStatus, setInitialStatus] = useState(task.status);

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any changes were made to the task
    if (task.status !== editedTask.status || task.priority !== editedTask.priority) {
      onSubmit(editedTask, initialStatus);
    } else {
      // Show alert if no changes were made
      window.alert('No changes made to the task!');
    }
  };

  // Render the edit task form
  return (
    <div className='edit-container'>
      <div className="edit-task-form">
        <form onSubmit={handleSubmit} className="form">
          <h2>Edit Task</h2>
          <div className="form-group">
            <label>Title</label>
            <input className='read-only' type="text" name="title" value={editedTask.title} readOnly />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className='read-only' name="description" value={editedTask.description} readOnly></textarea>
          </div>

          <div className="form-group">
            <label>Team</label>
            <input className='read-only' type="text" name="team" value={editedTask.team} readOnly />
          </div>

          <div className="form-group">
            <label>Assignee</label>
            <input className='read-only' type="text" name="assignee" value={editedTask.assignee} readOnly />
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select className='not-read-only'  name="priority" value={editedTask.priority} onChange={handleChange}>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select className='not-read-only' name="status" value={editedTask.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deferred">Deferred</option>
            </select>
          </div>

          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export EditTaskForm component
export default EditTaskForm;
