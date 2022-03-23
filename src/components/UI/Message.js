import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ setShow, children }) => {
  return (
    <Alert variant='danger' onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{children}</Alert.Heading>
    </Alert>
  );
};

export default Message;
