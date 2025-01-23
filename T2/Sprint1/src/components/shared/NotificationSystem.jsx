import React from 'react';

const NotificationSystem = ({ message, type }) => {
  const notificationClass = `notification ${type}`;
  return <div className={notificationClass}>{message}</div>;
};

export default NotificationSystem;
