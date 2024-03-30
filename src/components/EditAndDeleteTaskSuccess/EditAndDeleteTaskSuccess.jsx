// Import necessary modules and styles
import React from 'react';
import './EditAndDeleteTaskSuccess.css';

// EditAndDeleteTaskSuccess component definition
const EditAndDeleteTaskSuccess = ({ content }) => {
  // Log content to console
  console.log(content);

  // Render a notification with the provided content
  return (
    <div className='notification'>
      {content}
    </div>
  );
};

// Export EditAndDeleteTaskSuccess component
export default EditAndDeleteTaskSuccess;

