import axios from 'axios';
import React from 'react';
import useInput from './useInput';


const Login = () => {
    const email = useInput();
    const passwd = useInput();
    
    const onClick = () => {
        axios({
            method: 'post',
            url: process.env.REACT_APP_SERVER_BASE_URL + "/api/account/login/process",
            headers: {
                
            },
            data: {
                userEmail: email.value,
                password: passwd.value,
            }
        })
    }

    return <div className='login-container'>
        <input value={email.value} onChange={email.onChange} placeholder="아이디(example@econovation.kr)"/>
        <input value={passwd.value} onChange={passwd.onChange} placeholder="비밀번호"/>
        <button onClick={onClick}>로그인</button>
    </div>
}

export default Login;