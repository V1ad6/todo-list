import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import TaskCard from './components/TaskCard/TaskCard';
import AddTaskModal from './components/AddTaskModal/AddTaskModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  
  useEffect(() => {
    if (loaded.current) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      loaded.current = true;
    }
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1 },
    ]);
  };

  const removeTask = (removedTask) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== removedTask));
  };

  return (
    <div className="App">
      <h1 className="title">ToDo List</h1>
      <button className="add-btn" onClick={() => setModalOpen(true)}>+</button>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isCompleted={task.isCompleted}
          onToggle={() => toggleTask(task.id)}
          removeTask={() => removeTask(task.id)}
        />
      ))}
      {isModalOpen && <AddTaskModal onClose={() => setModalOpen(false)} onAdd={addTask} />}
    </div>
  );
}

export default App;
