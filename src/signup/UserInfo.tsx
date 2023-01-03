import React, { Dispatch, SetStateAction, useState } from 'react';
interface UserInfoProps {
  username: string,
  setUserName: Dispatch<SetStateAction<string>>,
  isValidName: boolean,
  setIsValidName: Dispatch<SetStateAction<boolean>>,
};

const UserInfo = ({ username, setUserName, isValidName, setIsValidName }:UserInfoProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = (e:any) => {
    const reg = /^[a-zA-z가-힣 ]{2,50}$/g;
    setUserName(() => e.target.value);
    if(!reg.test(e.target.value)){
      setErrorMessage('이름은 한글 혹은 영어로 구성되어야 하고, 2글자 이상 50글자 이하여야 합니다.');        
      setIsValidName(false);
      return;
    }
    setErrorMessage('');
    setIsValidName(true);    
  }
  return (
    <div className="user-container">
      <h3>이름</h3>
      <input type="text" placeholder="2~50자의 한글 혹은 영어이름" value={username} onChange={onChange}/>
      <div style={{color:'red', fontSize: '0.7rem'}}>{errorMessage}</div>
    </div>
  );
};

export default UserInfo;
