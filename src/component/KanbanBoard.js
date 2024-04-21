import React, { useState } from 'react';
import './App.css';


// Task component
const Task = ({ task, onDelete, onEdit }) => {
  const { id, title, tags } = task;

  return (
    <div className="task">
      <div>{title}</div>
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onEdit(id)}>Edit</button>
    </div>
  );
};

// AddTaskForm component
const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, tags: tags.split(',') });
    setTitle('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

// App component
const App = () => {
  const [boards, setBoards] = useState([{ id: 1, name: 'Backlog', tasks: [] }]);
  const [tasks, setTasks] = useState([]);
  const [newBoardName, setNewBoardName] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addBoard = () => {
    setBoards([...boards, { id: boards.length + 1, name: newBoardName, tasks: [] }]);
    setNewBoardName('');
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter(board => board.id !== id));
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <div className="boards">
        {boards.map(board => (
          <div key={board.id} className="board">
            <h2>{board.name}</h2>
            {board.tasks.map(task => (
              <Task key={task.id} task={task} onDelete={deleteTask} />
            ))}
            <AddTaskForm onAdd={task => setTasks([...tasks, task])} />
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="New board name"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
        <button onClick={addBoard}>Add Board</button>
      </div>
    </div>
  );
};

export default App;
