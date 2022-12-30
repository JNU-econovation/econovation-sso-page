import React from 'react';

const Email = () => {
  return (
    <div className="id-container">
      <h3>아이디</h3>
      <p>아이디로 사용할 이메일을 입력하시고 중복확인 해주세요.</p>
      <input type="text" placeholder="example@jnu.ac.kr" />
      <button type="button">중복확인</button>
    </div>
  );
};

export default Email;
