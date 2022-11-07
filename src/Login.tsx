import axios from 'axios';
import React from 'react';
import useInput from './useInput';
import './Login.css';

const Login = () => {
    const email = useInput();
    const passwd = useInput();
    
    const onSubmit = (e:any) => {
        e.preventDefault();
        axios({
            method: 'post',
            baseURL: process.env.REACT_APP_SERVER_BASE_URL,
            url: "/api/account/login/process",
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                userEmail: email.value,
                password: passwd.value,
            }
        }).then((response) => {
            
        }).catch((error) => {
           
        });
    }

    return <form onSubmit={onSubmit} className='login-form'>
        <h1>에코노베이션 로그인</h1>
        <input type="text" value={email.value} onChange={email.onChange} placeholder="아이디(example@econovation.kr)"/>
        <input type="password" value={passwd.value} onChange={passwd.onChange} placeholder="비밀번호"/>
        <input type="submit" value="Login"/>
        <input type="button" value="회원가입" />
    </form>
}

export default Login;