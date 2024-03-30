// Importing useState and useEffect hooks from React
import { useState, useEffect } from 'react'
// Importing the Home component
import Home from './components/Home/Home.jsx'
// Importing the TaskProvider from taskContext.js
import { TaskProvider } from './contexts/taskContext.js'

// Main App component
function App() {
  // State variables to manage tasks for different statuses
  const [pendingTask, setPendingTask] = useState([])
  const [InProgressTask, setInProgressTask] = useState([])
  const [completedTask, setcompletedTask] = useState([])
  const [deployedTask, setdeployedTask] = useState([])
  const [defferedTask, setdefferedTask] = useState([])

  // Function to add a new task
  const addTask = (task) => {
    // Determining the status of the task and updating the respective state
    if (task.status === 'Pending') {
      setPendingTask([task,...pendingTask])
    } else if (task.status === 'In Progress') {
      setInProgressTask([task,...InProgressTask])
    } else if (task.status === 'Completed') {
      setcompletedTask([task, ...completedTask ])
    } else if (task.status === 'Deployed') {
      setdeployedTask([task,...deployedTask])
    } else if (task.status === 'Deferred') {
      setdefferedTask([task,...defferedTask])
    }
  };

  // Function to update an existing task
  const updateTask = (updatedTask, initialStatus) => {
    // Checking if the status of the task has changed
    if (initialStatus !== updatedTask.status) {
      // Deleting the task from its initial status and adding it to the new status
      deleteTask(updatedTask, initialStatus)
      addTask(updatedTask)
    } else {
      // Updating the task in its current status
      if (updatedTask.status === 'Pending') {
        setPendingTask((prev) => prev.map((task) => task.id === updatedTask.id ? updatedTask : task))
      } else if (updatedTask.status === 'In Progress') {
        setInProgressTask((prev) => prev.map((task) => task.id === updatedTask.id ? updatedTask : task))
      } else if (updatedTask.status === 'Completed') {
        setcompletedTask((prev) => prev.map((task) => task.id === updatedTask.id ? updatedTask : task))
      } else if (updatedTask.status === 'Deployed') {
        setdeployedTask((prev) => prev.map((task) => task.id === updatedTask.id ? updatedTask : task))
      } else if (updatedTask.status === 'Deferred') {
        setdefferedTask((prev) => prev.map((task) => task.id === updatedTask.id ? updatedTask : task))
      }
    }
  };

  // Function to delete a task
  const deleteTask = (currentDeleteTask, initialStatus = "") => {
    let targetDeleteStatus;
    if (initialStatus === "") {
      targetDeleteStatus = currentDeleteTask.status
    } else {
      targetDeleteStatus = initialStatus
    }

    // Removing the task from the respective status
    if (targetDeleteStatus === 'Pending') {
      setPendingTask((prev) => prev.filter((task) => task.id !== currentDeleteTask.id))
    } else if (targetDeleteStatus === 'In Progress') {
      setInProgressTask((prev) => prev.filter((task) => task.id !== currentDeleteTask.id))
    } else if (targetDeleteStatus === 'Completed') {
      setcompletedTask((prev) => prev.filter((task) => task.id !== currentDeleteTask.id))
    } else if (targetDeleteStatus === 'Deployed') {
      setdeployedTask((prev) => prev.filter((task) => task.id !== currentDeleteTask.id))
    } else if (targetDeleteStatus === 'Deferred') {
      setdefferedTask((prev) => prev.filter((task) => task.id !== currentDeleteTask.id))
    }
  };

  // Loading tasks from local storage on component mount
  useEffect(() => {
    const allPendingTasks = JSON.parse(localStorage.getItem("allPendingTasks"))
    const allInProgressTasks = JSON.parse(localStorage.getItem("allInProgressTasks"))
    const allCompletedTasks = JSON.parse(localStorage.getItem("allCompletedTasks"))
    const allDeployedTasks = JSON.parse(localStorage.getItem("allDeployedTasks"))
    const allDeferredTasks = JSON.parse(localStorage.getItem("allDeferredTasks"))
    if (allPendingTasks && allPendingTasks.length > 0) {
      setPendingTask(allPendingTasks)
    }
    if (allInProgressTasks && allInProgressTasks.length > 0) {
      setInProgressTask(allInProgressTasks)
    }
    if (allCompletedTasks && allCompletedTasks.length > 0) {
      setcompletedTask(allCompletedTasks)
    }
    if (allDeployedTasks && allDeployedTasks.length > 0) {
      setdeployedTask(allDeployedTasks)
    }
    if (allDeferredTasks && allDeferredTasks.length > 0) {
      setdefferedTask(allDeferredTasks)
    }
  }, [])

  // Saving tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("allPendingTasks", JSON.stringify(pendingTask))
  }, [pendingTask])

  useEffect(() => {
    localStorage.setItem("allInProgressTasks", JSON.stringify(InProgressTask))
  }, [InProgressTask])

  useEffect(() => {
    localStorage.setItem("allCompletedTasks", JSON.stringify(completedTask))
  }, [completedTask])

  useEffect(() => {
    localStorage.setItem("allDeployedTasks", JSON.stringify(deployedTask))
  }, [deployedTask])

  useEffect(() => {
    localStorage.setItem("allDeferredTasks", JSON.stringify(defferedTask))
  }, [defferedTask])

  // Rendering the Home component wrapped in the TaskProvider
  return (
    <TaskProvider value={{ addTask, updateTask, deleteTask, pendingTask, InProgressTask, completedTask, defferedTask, deployedTask }}>
      <Home />
    </TaskProvider>
  )
}

// Exporting the App component as default
export default App
