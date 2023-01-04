import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ErrorBox from '../components/ErrorBox';
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
  const [validInput, setValidInput] = useState({
    password: false,
    confirmPassword: false,
  });

  const onPasswordChange = (e:any) => {
    setPassword(() => e.target.value);
    const reg = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,50}$/g;
    if(!reg.test(e.target.value)){
      setPasswordErrorMsg('비밀번호 조건에 어긋나는 비밀번호입니다.');
      return;
    }
    setPasswordErrorMsg('');
    setValidInput({...validInput, password: true });
  }

  const onConfirmPasswordChange = (e:any) => {
    setConfirmPassword(() => e.target.value);
    if(!(password === e.target.value)) {
      setConfirmPasswordErrorMsg('비밀번호가 일치하지 않습니다.');
      return;
    }
    setConfirmPasswordErrorMsg('');
    setValidInput({...validInput, confirmPassword: true });
  }

  useEffect(() => { 
    setIsValidPassword(validInput.password && validInput.confirmPassword);
  }, [validInput]);

  return (
    <div className="password-container">
      <p style={{fontWeight: 'bold'}}>비밀번호</p>
      <input
        type="password"
        placeholder="대, 소, 특수문자(!@#$%^&*), 숫자 적어도 1글자 포함, 8~50글자"
        onChange={onPasswordChange}
        value={password}
      />
      <ErrorBox>{passwordErrorMsg}</ErrorBox>
      <p style={{fontWeight: 'bold'}}>비밀번호 확인</p>
      <input type="password" placeholder="비밀번호 확인" onChange={onConfirmPasswordChange} value={confirmPassword}/>
      <ErrorBox>{confirmPasswordErrorMsg}</ErrorBox>
    </div>
  );
};

export default Password;
