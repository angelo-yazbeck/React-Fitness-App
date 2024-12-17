import React from 'react';
import { Button } from 'semantic-ui-react';

const CustomButton = ({ text, onClick }) => {
  return (
    <Button primary onClick={onClick} size="large">
      {text}
    </Button>
  );
};

export default CustomButton;
