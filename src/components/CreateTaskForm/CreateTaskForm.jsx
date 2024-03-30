// Import necessary modules and styles
import React, { useState } from 'react';
import './CreateTaskForm.css'; // Import TaskForm CSS file

// CreateTaskForm component definition
function CreateTaskForm({ onSubmit, onCancel }) {
  // State variables to manage form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit({ title, description, team, assignee, priority }); // Call onSubmit prop with form data
    // Reset form fields
    setTitle('');
    setDescription('');
    setTeam('');
    setAssignee('');
    setPriority('');
  };

  // Render form
  return (
    <div className='create-container'>
      <form className="task-form" onSubmit={handleSubmit}>
        {/* Title input field */}
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        {/* Description input field */}
        <label>Description:</label>
        <div className="description-container">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Team input field */}
        <label>Team:</label>
        <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} />

        {/* Assignee input field */}
        <label>Assignee:</label>
        <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} />

        {/* Priority dropdown */}
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="">Select Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>

        {/* Form submission and cancellation buttons */}
        <div className="buttons">
          <button type="submit">Add Task</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

// Export CreateTaskForm component
export default CreateTaskForm;
