#Todo Application with Context API

This project is a Todo Application built using React, Context API, and Vite. It demonstrates the use of React Context to manage state across components in a clean and scalable way. The application allows users to add, view, and manage their todos effectively.

#Features

Add Todos: Users can add new tasks to the todo list.

View Todos: All added tasks are displayed in a list.

Mark as Completed: Users can mark tasks as completed.

Delete Todos: Users can delete tasks from the list.

Global State Management: State is managed using React Context, ensuring efficient updates and access across components.

Responsive Design: The UI is styled with Tailwind CSS for a clean, responsive experience.

#Technologies Used

React: For building the user interface.

Context API: For global state management.

Vite: As the development build tool for fast and efficient development.

Tailwind CSS: For styling the application.

React Toastify: For showing notifications.

# Getting Started

Follow the instructions below to set up and run the project on your local machine.

# Prerequisites

Ensure you have the following installed:

Node.js (v14 or higher)

npm or yarn

# Installation

1. Clone the repository: git clone https://github.com/your-username/todo-context-app.git
2. Navigate to the project directory: cd todo-context-app
3. Install dependencies: npm install or yarn install

# Running the Application

Start the development server:

npm run dev
# or
yarn dev

Open your browser and navigate to http://localhost:5173 to view the application.

# How It Works

Context API

The TodoContext.jsx file manages the global state for todos. It includes:

State: Stores the list of todos.

#Actions:

addTodo: Adds a new todo.

deleteTodo: Deletes a todo.

toggleTodo: Toggles the completion status of a todo.

updateTodo: Update existing Todo.

The context is wrapped around the main app component to provide global access to todos and actions.

# Components

1. TodoForm

A controlled form where users can input and add new todos.

2. TodoItem

Represents a single todo with actions to mark as completed or delete.

# Styling

The application uses Tailwind CSS for styling. Responsive utilities ensure the application looks great on all devices.

# Notifications

React Toastify is used to provide user feedback for actions like adding or deleting a todo.

# Scripts

npm run dev: Start the development server.

npm run build: Build the application for production.
