import React, { Dispatch, SetStateAction, useState } from 'react';
import ErrorBox from '../components/ErrorBox';

interface UserInfoProps {
  userName: string,
  userUpdate: (property:string, newValue:string) => void,
  setIsValidName: Dispatch<SetStateAction<boolean>>,
};

const UserInfo = ({ userName: username, userUpdate, setIsValidName }:UserInfoProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = (e:any) => {
    const reg = /^[a-zA-z가-힣 ]{2,50}$/g;
    userUpdate(e.target.name, e.target.value);
    if(!reg.test(e.target.value)){
      setErrorMessage('한글 혹은 영어로 구성되어야 하고, 2글자 이상 50글자 이하여야 합니다.');        
      setIsValidName(false);
      return;
    }
    setErrorMessage('');
    setIsValidName(true);    
  }
  return (
    <div className="user-container">
      <h3>이름</h3>
      <input type="text" placeholder="2~50자의 한글 혹은 영어이름" value={username} onChange={onChange} name="userName"/>
      <ErrorBox>{errorMessage}</ErrorBox>
    </div>
  );
};

export default UserInfo;
