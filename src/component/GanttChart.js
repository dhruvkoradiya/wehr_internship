import React from 'react';

// Task component to represent each task in the Gantt chart
const Task = ({ task }) => {
  const { id, name, startDate, endDate } = task;
  const style = {
    backgroundColor: '#007bff',
    color: 'white',
    position: 'absolute',
    left: `${startDate}%`,
    width: `${endDate - startDate}%`,
    height: '30px',
    border: '1px solid #007bff',
    borderRadius: '5px',
    textAlign: 'center',
    lineHeight: '30px',
  };

  return (
    <div style={style}>
      {name}
    </div>
  );
};

// GanttChart component to render the Gantt chart
const GanttChart = ({ tasks }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '300px', border: '1px solid black' }}>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

// Sample tasks data for demonstration
const tasks = [
  { id: 1, name: 'Task 1', startDate: 0, endDate: 20 },
  { id: 2, name: 'Task 2', startDate: 10, endDate: 40 },
  { id: 3, name: 'Task 3', startDate: 30, endDate: 60 },
];

// App component to render the Gantt chart
const App = () => {
  return (
    <div>
      <h1>Gantt Chart</h1>
      <GanttChart tasks={tasks} />
    </div>
  );
};

export default App;
