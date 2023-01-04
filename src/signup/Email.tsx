import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
interface EmailProps {
  isValidEmail: boolean,
  setIsValidEmail: Dispatch<SetStateAction<boolean>>,
  email: string,
  setEmail: Dispatch<SetStateAction<string>>, 
};
const isEmailFormat = (email:string) => {
  const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
}

const Email = ({ isValidEmail, setIsValidEmail, email, setEmail}:EmailProps) => {
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = (e: any) => {
    setIsValidEmail(false);
    setEmail(() => e.target.value);
    if(!isEmailFormat(e.target.value)) {
      setErrorMessage('유효하지 않은 이메일 형식입니다.');
    } else {
      setErrorMessage('');
    }
  }

  const onClick = () => {
    const form = new FormData();
    form.append('userEmail', email); 
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_SERVER_BASE_URL,
      url: '/api/accounts/duplicate',
      headers: {
        'access-control-allow-origin': '*',
      },
      data: form,
    })
      .then((response) => {
        const { message, status } = response.data;
        if(status === 'CONFLICT'){
          setErrorMessage(message);
          setIsValidEmail(false);
        }
        if(status === 'OK') {
          setIsValidEmail(true);
          alert('중복 인증을 완료했습니다.');
        }
      })
      .catch((error) => {
          setIsValidEmail(false);
          setErrorMessage('에러가 발생했습니다.');
      });
  }

  return (
    <div className="id-container">
      <h3>아이디</h3>
      <p>아이디로 사용할 이메일을 입력하시고 중복확인 해주세요.</p>
      <input type="text" placeholder="example@jnu.ac.kr" value={email} onChange={onChange}/>
      <div style={{color:'red'}}>{errorMessage}</div>
      <button type="button" onClick={onClick} disabled={isValidEmail}>중복확인</button>
    </div>
  );
};

export default Email;
