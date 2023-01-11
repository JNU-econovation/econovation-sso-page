import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ErrorBox from '../components/ErrorBox';
import { isPasswordFormat } from '../lib/FormatChecker';

interface PasswordProps {
  password: string,
  confirmPassword: string,
  setIsValidPassword: Dispatch<SetStateAction<boolean>>,
  userUpdate: (property:string, newValue:string) => void,
}

const Password = ({ password, confirmPassword, setIsValidPassword, userUpdate}:PasswordProps) => {
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState('');
  const [validInput, setValidInput] = useState({
    password: false,
    confirmPassword: false,
  });

  const onChange = ({ target: { name, value }}:any) => {
    const dispatcher:{[index:string]: any} = {
      password: {
        predicate : isPasswordFormat,
        msg: '비밀번호 조건에 어긋나는 비밀번호 입니다.',
        setErrorMsg: setPasswordErrorMsg,
      }, 
      confirmPassword: {
        predicate: (confirmPassword:string) => password === confirmPassword,
        msg: '비밀번호가 일치하지 않습니다.',
        setErrorMsg: setConfirmPasswordErrorMsg,
      },
    };
    userUpdate(name, value);

    if(!dispatcher[name].predicate(value)){
      dispatcher[name].setErrorMsg(dispatcher[name].msg);
      return;
    }
    dispatcher[name].setErrorMsg('');
    setValidInput({ ...validInput, [name]: true });
  }

  useEffect(() => { 
    setIsValidPassword(validInput.password && validInput.confirmPassword);
  }, [validInput]);

  return (
    <div className="password-container">
      <div className='password'>
        <p style={{fontWeight: 'bold'}}>비밀번호</p>
        <input
          type="password"
          placeholder="대, 소, 특수문자(!@#$%^&*), 숫자 적어도 1글자 포함, 8~50글자"
          onChange={onChange}
          value={password}
          name="password"
        />
        <ErrorBox>{passwordErrorMsg}</ErrorBox>
      </div>
      <div className="confirm-password">
        <p style={{fontWeight: 'bold'}}>비밀번호 확인</p>
        <input type="password" placeholder="비밀번호 확인" onChange={onChange} value={confirmPassword} name="confirmPassword"/>
        <ErrorBox>{confirmPasswordErrorMsg}</ErrorBox>
      </div>
    </div>
  );
};

export default Password;
