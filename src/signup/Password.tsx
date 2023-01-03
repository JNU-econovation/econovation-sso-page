import React, { Dispatch, SetStateAction, useState } from 'react';
interface PasswordProps {
  password: string,
  setPassword: Dispatch<SetStateAction<string>>,
  confirmPassword: string,
  setConfirmPassword:Dispatch<SetStateAction<string>>,
  isValidPassword: boolean,
  setIsValidPassword: Dispatch<SetStateAction<boolean>>
}
const Password = ({ password, setPassword, confirmPassword, setConfirmPassword, isValidPassword, setIsValidPassword}:PasswordProps) => {
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState('');

  const onPasswordChange = (e:any) => {
    setPassword(() => e.target.value);
    const reg = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9!@#$%^&*]{10,}$/g;
    if(!reg.test(e.target.value)){
      setPasswordErrorMsg('비밀번호 조건에 어긋나는 비밀번호입니다.');
      setIsValidPassword(false);
      return;
    }
    setPasswordErrorMsg('');
  }

  const onConfirmPasswordChange = (e:any) => {
    setConfirmPassword(() => e.target.value);
    if(!(password === e.target.value)) {
      setConfirmPasswordErrorMsg('비밀번호가 일치하지 않습니다.');
      setIsValidPassword(false);
      return;
    }
    setConfirmPasswordErrorMsg('');
  }
  return (
    <div className="password-container">
      <p>비밀번호 입력</p>
      <input
        type="password"
        placeholder="대, 소, 특수문자(!@#$%^&*) 1글자 이상 포함, 10글자 이상"
        onChange={onPasswordChange}
        value={password}
      />
      <div style={{color:'red'}}>{passwordErrorMsg}</div>
      <p>비밀번호 확인</p>
      <input type="password" placeholder="비밀번호 확인" onChange={onConfirmPasswordChange} value={confirmPassword}/>
      <div style={{color:'red'}}>{confirmPasswordErrorMsg}</div>
    </div>
  );
};

export default Password;
