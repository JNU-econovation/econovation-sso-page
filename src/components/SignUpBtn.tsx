import React from 'react';

interface BtnComponent {
  text: string;
  isDisable: boolean;
}

const style = {
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  backgroundColor: '#577CFF',
  height: '56px',
  width: '300px',
};

const SignUpBtn = ({ text, isDisable }: BtnComponent) => {
  return (
    <button disabled={isDisable} style={style}>
      {text}
    </button>
  );
};

export default SignUpBtn;
