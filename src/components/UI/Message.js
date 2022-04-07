import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ children, variant, onClose }) => {
  return (
    <Alert variant={variant} dismissible onClick={onClose}>
      <Alert.Heading>{children}</Alert.Heading>
    </Alert>
  );
};

export default Message;
