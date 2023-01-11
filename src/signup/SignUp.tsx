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

const isMember = (member: string, userUpdate: (property:string, newValue:string) => void ) => {
  switch (member) {
    case 'member':
      return <Member userUpdate={userUpdate} />;
    case 'guest':
      return <Guest />;
    default:
      return <></>;
  }
};
const SignUp = () => {
  const navigate = useNavigate();
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
    if(user.membership === ''){
      setSubmitErrorMsg('회원 여부를 선택해주세요.');
      return;
    }
    if(!isValidPassword){
      setSubmitErrorMsg('비밀번호를 확인하세요.');
      return;
    }
    let year ;
    if(user.membership === 'member'){
      if(user.cardinal === '') {
        setSubmitErrorMsg('기수를 선택해주세요.');
        return;
      }
      year = user.cardinal;
    } else {
      year = '0';
    }

    const form = new FormData();
    form.append('userEmail', user.userEmail);
    form.append('year', year);
    form.append('userName', user.userName);
    form.append('password', user.password);
    
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
        <Membership userUpdate={userUpdate} />
        {isMember(user.membership, userUpdate)}
        <Email isValidEmail={isValidEmail} setIsValidEmail={setIsValidEmail} userEmail={user.userEmail} userUpdate={userUpdate}/>
        <Password password={user.password} confirmPassword={user.confirmPassword} setIsValidPassword={setIsValidPassword} userUpdate={userUpdate}/>
        <button type='submit'>회원가입</button>
        <ErrorBox>{submitErrorMsg}</ErrorBox>
      </form>
    </div>
  );
};

export default SignUp;
