import React from 'react';

const UserInfo = () => {
  return (
    <div className="user-container">
      <h3>이름</h3>
      <input type="text" placeholder="2~50자의 한글 혹은 영어이름" />
    </div>
  );
};

export default UserInfo;
