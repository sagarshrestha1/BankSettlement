import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ label = 'Back', steps = -1, className = 'btn btn-danger float-end px-5' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(steps); 
  };

  return (
    <button onClick={handleBack} className={className} >
      {label}
    </button>
  );
};

export default BackButton;
