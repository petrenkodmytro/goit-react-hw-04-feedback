import React from 'react';

interface messageProps {
  message: string;
}

export const Notification: React.FC<messageProps> = ({ message }) => {
  return <p>{message}</p>;
};
