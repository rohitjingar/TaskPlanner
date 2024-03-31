# Task Management System

## Overview
The Task Management System is a web application designed to help users manage their tasks efficiently. It allows users to create, edit, delete, and track tasks across different categories such as Pending, In Progress, Completed, Deployed, and Deferred. This system provides a user-friendly interface for managing tasks and provides features such as task assignment, priority settings, and date tracking.

## Features
- Create tasks with titles, descriptions, teams, assignees, priorities, and status.
- Categorize tasks into different statuses: Pending, In Progress, Completed, Deployed, and Deferred.
- Edit existing tasks, including updating titles, descriptions, assignees, priorities, and status.
- Delete tasks from the system.
- Filter tasks based on assignees, priorities, start date, and end date.
- Sort tasks by priority, start date, and end date.
- Display notifications for successful task edits and deletions.

## Technologies Used
- React.js for building the frontend user interface.
- CSS for styling the components and layout.
- Context API for managing global state across components.
- Local Storage for storing tasks data locally in the browser.
- Vercel for hosting the web application.

## How to Run
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm start`.

## Assumptions and Design Considerations

### Responsive Design
The project assumes that it needs to be responsive to different screen sizes, particularly focusing on smaller screens such as mobile devices. This assumption guides the adjustments made to the layout, font sizes, and other styles to ensure proper display and usability across various devices.

### User Interface Enhancement
The project aims to enhance the user interface (UI) for better visibility and usability. This involves increasing the font size of values displayed in input fields, adding borders to input fields for improved visibility, and adjusting the layout of certain elements to improve readability and interaction.

### Accessibility Considerations
The project assumes the importance of accessibility and takes steps to improve it. This includes making input fields more visible and readable, ensuring proper color contrast for text and background elements, and providing clear visual cues for user interactions, such as hover effects.

### Feedback Mechanisms
The project assumes the need for feedback mechanisms to inform users about their actions. This includes displaying success messages when tasks are added, edited, or deleted, as well as providing confirmation dialogs for critical actions like deleting tasks.

### Ease of Use
The project aims to provide a user-friendly experience by simplifying complex interactions and making it easy for users to navigate through different sections of the application. This involves organizing tasks into categories, providing filtering and sorting options, and ensuring clear visual cues for user interactions.

### Maintainability
The project assumes the importance of maintainability and scalability. It follows best practices in code organization, uses modular components for reusability, and applies consistent styling and naming conventions to facilitate future updates and enhancements.

By considering these assumptions, the project aims to deliver a responsive, accessible, and user-friendly task management application that meets the needs of its users across different devices and usage scenarios.

## Deployment
This project is deployed using Vercel. You can access the live version of the application [here](https://taskplanner-ntny4v8eh-rohitjingar.vercel.app/).
