import React, { SetStateAction, useState, Dispatch } from 'react';

import Email from './Email';
import Guest from './Guest';
import Member from './Member';
import Membership from './Membership';
import Password from './Password';
import UserInfo from './UserInfo';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import ErrorBox from '../components/ErrorBox';
import useSignUpInput from '../hook/useSignUpInput';

const isMember = (member: string, setCardinal: Dispatch<SetStateAction<string>>) => {
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
  const navigate = useNavigate();
  const [membership, setMembership] = useState('');
  const [cardinal, setCardinal] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitErrorMsg, setSubmitErrorMsg] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [user, userUpdate] = useSignUpInput({ userName: '', membership: '', cardinal: '', userEmail:'', password: '', confirmPassword: ''});


  const onSubmit = (e:any) => {
    e.preventDefault();

    if(!isValidName) {
      setSubmitErrorMsg('이름 입력을 확인해주세요.');
      return;
    }
    if(!isValidEmail){
      setSubmitErrorMsg('이메일 입력을 확인해주세요.');
      return;
    }
    if(membership === ''){
      setSubmitErrorMsg('회원 여부를 선택해주세요.');
      return;
    }
    if(!isValidPassword){
      setSubmitErrorMsg('비밀번호를 확인하세요.');
      return;
    }
    let year ;
    if(membership === 'member'){
      if(year === '') {
        setSubmitErrorMsg('기수를 선택해주세요.');
        return;
      }
      year = year;
    } else {
      year = '0';
    }

    const form = new FormData();
    form.append('userEmail', userEmail);
    form.append('year', cardinal);
    form.append('userName', user.userName);
    form.append('password', password);
    
    axios({
      method: 'post',
      baseURL: process.env.REACT_APP_SERVER_BASE_URL,
      url: '/api/accounts/sign-up',
      headers: {
        'access-control-allow-origin': '*',
      },
      data: form,
    })
      .then((response) => {
        alert('회원가입에 성공했습니다.');
        navigate('/');
      })
      .catch((error) => {
        setSubmitErrorMsg('회원가입에 실패했습니다. 잠시만 기다려주세요.');
      });
  }
  return (
    <div className="container" >
      <form onSubmit={onSubmit}>
        <h1>회원가입</h1>
        <UserInfo userName={user.userName} userUpdate={userUpdate} setIsValidName={setIsValidName}/>
        <Membership setValue={setMembership} />
        {isMember(membership, setCardinal)}
        <Email isValidEmail={isValidEmail} setIsValidEmail={setIsValidEmail} email={userEmail} setEmail={setUserEmail}/>
        <Password password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} isValidPassword={isValidPassword} setIsValidPassword={setIsValidPassword}/>
        <button type='submit'>회원가입</button>
        <ErrorBox>{submitErrorMsg}</ErrorBox>
      </form>
    </div>
  );
};

export default SignUp;
