import React, { useState } from 'react';

import Email from './Email';
import Guest from './Guest';
import Member from './Member';
import Membership from './Membership';
import Password from './Password';
import UserInfo from './UserInfo';
import './SignUp.css';

const isMember = (member: string, setCardinal: any) => {
  switch (member) {
    case 'member':
      return <Member setCardinal={setCardinal} />;
    case 'guest':
      return <Guest />;
    default:
      return <></>;
  }
};
const SignUp = () => {
  const [username, setUserName] = useState('');
  const [membership, setMembership] = useState('');
  const [cardinal, setCardinal] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <form>
        <h1>회원가입</h1>
        <UserInfo />
        <Membership setValue={setMembership} />
        {isMember(membership, setCardinal)}
        <Email isValidEmail={isValidEmail} setIsValidEmail={setIsValidEmail} email={email} setEmail={setEmail}/>
        <Password />
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
