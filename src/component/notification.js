import React from 'react';

// Notification component to represent each notification
const Notification = ({ id, text }) => {
  return (
    <div className="notification">
      <span className="notification-id">#{id}</span>
      <span className="notification-text">{text}</span>
    </div>
  );
};

// App component to render the list of notifications
const App = () => {
  // Generate mock data for 1000 notifications with random IDs and texts
  const notifications = Array.from({ length: 1000 }, (_, index) => ({
    id: Math.floor(Math.random() * 1000000), // Generate a random ID
    text: `Notification ${index + 1}: This is a sample notification for HR regarding future events, announcements, recent activities, etc.`,
  }));

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <div className="notification-list">
        {notifications.map(notification => (
          <Notification key={notification.id} id={notification.id} text={notification.text} />
        ))}
      </div>
    </div>
  );
};

export default App;
