import React, { Dispatch, SetStateAction } from 'react';
interface EmailProps {
  isValidEmail: boolean,
  setIsValidEmail: Dispatch<SetStateAction<boolean>>,
  email: string,
  setEmail: Dispatch<SetStateAction<string>>, 
};

const Email = ({ isValidEmail, setIsValidEmail, email, setEmail}:EmailProps) => {
  const onChange = (e: any) => {
    setIsValidEmail(false);
    setEmail(() => e.target.value);
    
  }

  const onClick = () => {
    
  }

  return (
    <div className="id-container">
      <h3>아이디</h3>
      <p>아이디로 사용할 이메일을 입력하시고 중복확인 해주세요.</p>
      <input type="text" placeholder="example@jnu.ac.kr" value={email} onChange={onChange}/>
      <div>{}</div>
      <button type="button" onClick={onClick} disabled={isValidEmail}>중복확인</button>
    </div>
  );
};

export default Email;
