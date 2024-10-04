import React, { useState } from "react";
import Header from "../../components/header/Header";
import ViewTasks from "../../components/viewTasks/container/ViewTasks";
import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="home-container">
      {<Header handleAddTask={addTask} />}

      {}
      <ViewTasks
        tasks={tasks}
        deleteTaskById={deleteTaskById}
        onCompletedTask={toggleTaskCompletedById}
      />
    </div>
  );
};

export default Home;
