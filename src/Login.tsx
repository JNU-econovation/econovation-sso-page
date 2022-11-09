import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useInput from './useInput';
import './Login.css';

const Login = () => {
    const email = useInput();
    const passwd = useInput();
    const [errorMessage, setErrorMessage] = useState("");
    const [redirectUrl, setRedirectUrl] = useState("");

    const onSubmit = (e:any) => {
        e.preventDefault();
        if(!email.value || !passwd.value){
            setErrorMessage("아이디나 비밀번호를 정확히 입력해주세요.");
            return;
        }
        axios({
            method: 'post',
            baseURL: process.env.REACT_APP_SERVER_BASE_URL,
            url: "/api/account/login/process",
            headers: {
                'access-control-allow-origin': '*'
            },
            data: {
                userEmail: email.value,
                password: passwd.value,
                redirectUrl: redirectUrl
            }
        }).then((response) => {
            if(response.status !== 200){
                setErrorMessage("아이디나 비밀번호를 다시 입력해주세요.");
            }
            
        }).catch((error) => {
            // error.request.status 에 따른 로직
            setErrorMessage(() => "로그인에 실패했습니다. 네트워크 환경을 확인해주세요.");
        });
    }

    useEffect(() => {
        setRedirectUrl(() => localStorage.getItem('redirectUrl') ?? 'https://econovation.kr');
    }, []);
    return <form onSubmit={onSubmit} className='login-form'>
        <h1>에코노베이션 로그인</h1>
        <input type="text" value={email.value} onChange={email.onChange} placeholder="아이디(example@econovation.kr)"/>
        <input type="password" value={passwd.value} onChange={passwd.onChange} placeholder="비밀번호"/>
        <input type="submit" value="Login"/>
        <input type="button" value="회원가입" />
        <div className='error-message'>{errorMessage}</div>
    </form>
}

export default Login;