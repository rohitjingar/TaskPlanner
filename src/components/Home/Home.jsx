import React, { useState } from 'react';
import './Home.css';
import { useTask } from '../../contexts/taskContext.js';
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import DisplayNoTaskMessage from '../DisplayNoTaskMessage/DisplayNoTaskMessage.jsx';
import TaskAddedMessage from '../TaskAddedMessage/TaskAddedMessage.jsx';
import TaskCategoryContainer from '../TaskCategoryContainer/TaskCategoryContainer.jsx';


function Home() {
   // Accessing task context and necessary functions
  const { addTask, pendingTask, InProgressTask, completedTask, defferedTask, deployedTask } = useTask();
  // State variables to manage component visibility
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showPendingTasks, setShowPendingTasks] = useState(false);
  const [showInProgressTasks, setShowInProgressTasks] = useState(false);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [showDeployedTasks, setShowDeployedTasks] = useState(false);
  const [showDeferredTasks, setShowDeferredTasks] = useState(false);
  const [showNoTaskMessage, setShowNoTaskMessage] = useState(false);
  const [cetegoryShowNoTaskMessage, setCetegoryShowNoTaskMessage]  = useState("")
  const [showTaskAddedMessage, setShowTaskAddedMessage] = useState(false);
  // Function to add a new task
  const handleAddTask = (newTask) => {
    const taskId = uuidv4();
    addTask({ ...newTask, id: taskId, startDate: new Date(), status: 'Pending', endDate:'',});
    setShowTaskForm(false);
    setShowTaskAddedMessage(true);
    setTimeout(() => {
      setShowTaskAddedMessage(false);
    }, 3000); // Hide after 3 seconds
  };
  
  // Function to cancel adding a new task
  const handleCancelAddTask = () => {
    setShowTaskForm(false);
  };

  // Function to handle no task message
  const handleNoTaskMessage = (tasks,status) =>{
      if(tasks.length>0){
          // Show tasks for the selected category
          if(status === "Pending")setShowPendingTasks(true)
          else if(status === "In Progress")setShowInProgressTasks(true)
          else if(status === "Completed")setShowCompletedTasks(true)
          else if(status === "Deployed")setShowDeployedTasks(true)
          else if(status === "Deferred")setShowDeferredTasks(true)
       }
       else{
         // Show no task message for the selected category
         setCetegoryShowNoTaskMessage(status)
         setShowNoTaskMessage(true)
       }
  }

  // Function to close task category containers
  const handleTaskCategoryContainerClose = (status)=>{
    if(status === "Pending")setShowPendingTasks(false)
    else if(status === "In Progress")setShowInProgressTasks(false)
    else if(status === "Completed")setShowCompletedTasks(false)
    else if(status === "Deployed")setShowDeployedTasks(false)
    else if(status === "Deferred")setShowDeferredTasks(false)
  }
  return (
    <div className="container">
      {showTaskAddedMessage && <TaskAddedMessage onClose={() => setShowTaskAddedMessage(false)} />}
      <div className="header">
        <h1>Task Board</h1>
        <button onClick={() => setShowTaskForm(true)}>Add New Task</button>
      </div>
      <div className="task-categories">
        <div className="task-category" style={{ backgroundColor: '#ffc107' }} onClick={() => handleNoTaskMessage(pendingTask,"Pending")}>
          <h2>Pending</h2>
          {/* Add onClick handler to navigate to pending tasks */}
          <div className="arrow" >
            &#8594;
          </div>
        </div>
        <div className="task-category" style={{ backgroundColor: '#007bff' }} onClick={() => handleNoTaskMessage(InProgressTask,"In Progress")}>
          <h2>In Progress</h2>
          {/* Add onClick handler to navigate to in progress tasks */}
          <div className="arrow" >
            &#8594;
          </div>
        </div>
        <div className="task-category" style={{ backgroundColor: '#28a745' }} onClick={() => handleNoTaskMessage(completedTask,"Completed")}>
          <h2>Completed</h2>
          {/* Add onClick handler to navigate to completed tasks */}
          <div className="arrow" >
            &#8594;
          </div>
        </div>
        <div className="task-category" style={{ backgroundColor: '#6f42c1' }} onClick={() => handleNoTaskMessage(deployedTask,"Deployed")}>
          <h2>Deployed</h2>
          {/* Add onClick handler to navigate to deployed tasks */}
          <div className="arrow" >
            &#8594;
          </div>
        </div>
        <div className="task-category" style={{ backgroundColor: '#6c757d' }} onClick={() => handleNoTaskMessage(defferedTask,"Deferred")}>
          <h2>Deferred</h2>
          {/* Add onClick handler to navigate to deferred tasks */}
          <div className="arrow" >
            &#8594;
          </div>
        </div>
      </div>
      {showNoTaskMessage && <DisplayNoTaskMessage category= {cetegoryShowNoTaskMessage}  onClose={() => setShowNoTaskMessage(false)} />}
     
      {showTaskForm && <CreateTaskForm onSubmit={handleAddTask} onCancel={handleCancelAddTask} />}
      {showPendingTasks && pendingTask.length>0 && (
        <TaskCategoryContainer title="Pending" tasks={pendingTask}  onClose = {handleTaskCategoryContainerClose} />
      )}
      {showInProgressTasks && InProgressTask.length>0 && (
        <TaskCategoryContainer title="In Progress" tasks={InProgressTask} onClose = {handleTaskCategoryContainerClose} />
      )}
      {showCompletedTasks && completedTask.length>0 && (
        <TaskCategoryContainer title="Completed" tasks={completedTask} onClose = {handleTaskCategoryContainerClose}  />
      )}
      {showDeployedTasks && deployedTask.length>0 && (
        <TaskCategoryContainer title="Deployed" tasks={deployedTask} onClose = {handleTaskCategoryContainerClose}  />
      )}
      {showDeferredTasks && defferedTask.length>0 && (
        <TaskCategoryContainer title="Deferred" tasks={defferedTask} onClose = {handleTaskCategoryContainerClose}  />
      )}
    </div>
  ); 
}
export default Home;