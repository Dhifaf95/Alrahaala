import React from 'react';
import './button.css';

const Button = ({
  label = 'Company Booking',
  className = '',
  width = 'auto',
  height = 'auto',
  fontSize = '18px',
  onClick, // قبول خاصية onClick
}) => {
  return (
    <div
      className={`butt ${className}`}
      style={{ width, fontSize, height }}
    >
      <button
        type="submit"
        className={`submit-btn ${className}`}
        style={{ width, height, fontSize }}
        onClick={onClick} // تمرير onClick للزر الداخلي
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
