import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import "./App.css";

const initialTasks = [
  {
    id: 1,
    title: "Design login page",
    description: "Create wireframes for the login screen.",
    priority: "high",
    status: "todo",
  },
  {
    id: 2,
    title: "Set up project repo",
    description: "Initialise Git repo and push initial commit.",
    priority: "medium",
    status: "done",
  },
  {
    id: 3,
    title: "Write API docs",
    description: "Document all REST endpoints.",
    priority: "low",
    status: "todo",
  },
  {
    id: 4,
    title: "Implement auth flow",
    description: "Build login and registration with JWT.",
    priority: "high",
    status: "inprogress",
  },
  {
    id: 5,
    title: "Fix navigation bug",
    description: "Sidebar collapses unexpectedly on mobile.",
    priority: "medium",
    status: "inprogress",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = (t) => {
    console.log(t);
  };

  const handleMoveTask = (taskId) => {
    const nextStatus = {
      todo: "inprogress",
      inprogress: "done",
    };
    setTasks(
      tasks.map((t) =>
        t.id === taskId ? { ...t, status: nextStatus[t.status] } : t,
      ),
    );
  };
  // const handleSelectTask = { (t) =>

  // };

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "inprogress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <>
      <AddTaskForm onAdd={handleAddTask}></AddTaskForm>
    </>
  );
}

export default App;
