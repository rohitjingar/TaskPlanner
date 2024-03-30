// Importing required modules from React
import { useContext, createContext } from "react"

// Creating a context to manage tasks
export const TaskContext = createContext({
    // Default values for different task categories
    pendingTask:[],
    InProgressTask:[],
    completedTask:[],
    deployedTask:[],
    defferedTask:[],
    // Default functions for adding, updating, and deleting tasks
    addTask: (task) => {},
    updateTask: (id, task) => {},
    deleteTask: (id) => {},
})

// Custom hook to access the task context
export const useTask = () => {
     return useContext(TaskContext)
}

// Provider component for the task context
export const TaskProvider = TaskContext.Provider
