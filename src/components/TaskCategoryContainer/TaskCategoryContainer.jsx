// Import necessary modules and styles
import React, { useState } from 'react';
import { useTask } from '../../contexts/taskContext.js';
import TaskCard from '../Card/TaskCard.jsx';
import EditTaskForm from '../EditTaskForm/EditTaskForm.jsx';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation.jsx';
import './TaskCategoryContainer.css'
import EditAndDeleteTaskSuccess from '../EditAndDeleteTaskSuccess/EditAndDeleteTaskSuccess.jsx';

// TaskCategoryContainer component definition
function TaskCategoryContainer({ title, tasks, onClose }) {
    // Task context
    const { updateTask, deleteTask } = useTask();
    
    // State variables
    const [selectedTask, setSelectedTask] = useState(null);
    const [sortBy, setSortBy] = useState('priority'); // Default sorting by priority
    const [filterAssignee, setFilterAssignee] = useState('');
    const [filterPriority, setFilterPriority] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showDeleteTaskMessage, setShowDeleteTaskMessage] = useState(false);
    const [showEditTaskForm, setShowEditTaskForm] = useState(false);
    const [showEditAndDeleteTaskSuccess, setshowEditAndDeleteTaskSuccess] = useState(false)
    const [contentForEditAndDeleteTaskSuccess, setContentForEditAndDeleteTaskSuccess] = useState("")
    let backGroundColorHeader 
    
    // Determine background color based on the task category
    if(title === "Pending"){
      backGroundColorHeader  = '#ffc107'
    }
    else if(title === "In Progress"){
      backGroundColorHeader  = '#007bff'
    }
    else if(title === "Completed"){
      backGroundColorHeader  = '#28a745'
    }
    else if(title === "Deployed"){
      backGroundColorHeader  = '#6f42c1'
    }
    else if(title === "Deferred"){
      backGroundColorHeader  = '#6c757d'
    }
    
    // Function to handle editing a task
    const handleEditTask = (task) => {
      setSelectedTask(task);
      setShowEditTaskForm(true);
    };
    
    // Function to handle deleting a task
    const handleDeleteTask = (task) => {
      setSelectedTask(task);
      setShowDeleteTaskMessage(true);
    };
    
    // Function to confirm deletion of a task
    const handleConfirmDelete = () => {
      deleteTask(selectedTask);
      setShowDeleteTaskMessage(false);
      setshowEditAndDeleteTaskSuccess(true);
      setContentForEditAndDeleteTaskSuccess("Task deleted successfully!")
      setTimeout(()=>{
        setshowEditAndDeleteTaskSuccess(false);
      },3000)
    };
  
    // Function to cancel deletion of a task
    const handleCancelDelete = () => {
      setShowDeleteTaskMessage(false);
    };
  
    // Function to handle submission of edited task
    const handleEditSubmit = (updatedTask, initialStatus) => {
      console.log(":min")
      if(updatedTask.status ==='Deployed'){
        updatedTask.endDate  = new Date();
        updateTask(updatedTask, initialStatus)
      }
      else {updateTask(updatedTask, initialStatus);}
      setShowEditTaskForm(false);
      setshowEditAndDeleteTaskSuccess(true);
      setContentForEditAndDeleteTaskSuccess("Task edited successfully!")
      setTimeout(()=>{
        setshowEditAndDeleteTaskSuccess(false);
      },3000)
    };
  
    // Function to cancel editing of a task
    const handleEditCancel = () => {
      setShowEditTaskForm(false);
    };
  
    // Function to sort tasks
    const sortTasks = (taskList) => {
      if (sortBy === 'priority') {
        return taskList.sort((a, b) => a.priority.localeCompare(b.priority));
      } else if (sortBy === 'startDate') {
        return taskList.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      } else if (sortBy === 'endDate') {
        return taskList.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
      }
      return taskList;
    };
  
    // Function to filter tasks
    const filterTasks = (taskList) => {
      let filteredTasks = taskList.filter(task => {
        let assigneeMatch = !filterAssignee || task.assignee.toLowerCase().includes(filterAssignee.toLowerCase());
        let priorityMatch = !filterPriority || task.priority === filterPriority;
        let startDateMatch = !startDate || new Date(task.startDate) >= new Date(startDate);
        let endDateMatch = !endDate || new Date(task.endDate) <= new Date(endDate);
        return assigneeMatch && priorityMatch && startDateMatch && endDateMatch;
      });
      return filteredTasks;
    };
    
    // Render component
    return (
      <div className='task-category-container' >
        { showEditAndDeleteTaskSuccess && (<EditAndDeleteTaskSuccess  content = {contentForEditAndDeleteTaskSuccess}/>)}
        <div className='close-icon' onClick={()=>onClose(title)}></div>
        <div className='header'>
          <div className='filter-options'>
            <label>Filter by Assignee:</label>
            <input type="text" value={filterAssignee} onChange={(e) => setFilterAssignee(e.target.value)} />
          </div>
          <div className='filter-options'>
            <label>Filter by Priority:</label>
            <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
              <option value="">All</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <div className='filter-options'>
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className='filter-options'>
            <label>End Date:</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div className='filter-options'>
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="startDate">Start Date</option>
              <option value="endDate">End Date</option>
            </select>
          </div>
  
        </div>
        <div className="tasks-container">
          <div className='category-header' style={{ backgroundColor: backGroundColorHeader }}>{title}</div>
          {tasks.length > 0 && (
            <div className="card-container">
              {sortTasks(filterTasks(tasks)).map((task) => (
                <div key={task.id} className='card-container1' >
                  <TaskCard task={task} onEdit={handleEditTask} onDelete={handleDeleteTask}  statusColor = {backGroundColorHeader} />
                </div>
              ))}
            </div>
          )}
        </div>
        {showDeleteTaskMessage && (
          <DeleteConfirmation
            task={selectedTask}
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
        {showEditTaskForm && (
          <EditTaskForm task={selectedTask} onSubmit={handleEditSubmit} onCancel={handleEditCancel} />
        )}
      </div>
    );
  }
  
// Export TaskCategoryContainer component
export default TaskCategoryContainer;
