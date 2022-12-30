import React from 'react';

const Password = () => {
  return (
    <div className="password-container">
      <p>비밀번호 입력</p>
      <input
        type="password"
        placeholder="대, 소, 특수문자(!@#$%^&*) 1글자 이상 포함, 10글자 이상"
      />
      <p>비밀번호 확인</p>
      <input type="password" placeholder="비밀번호 확인" />
    </div>
  );
};

export default Password;
