import axios from 'axios';
import React from 'react';
import useInput from './useInput';


const Login = () => {
    const email = useInput();
    const passwd = useInput();
    
    const onSubmit = (e:any) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: process.env.REACT_APP_SERVER_BASE_URL + "/api/account/login/process",
            headers: {
                
            },
            data: {
                userEmail: email.value,
                password: passwd.value,
            }
        });
    }

    return <form onSubmit={onSubmit} className='login-container'>
        <input type="text" value={email.value} onChange={email.onChange} placeholder="아이디(example@econovation.kr)"/>
        <input type="password" value={passwd.value} onChange={passwd.onChange} placeholder="비밀번호"/>
        <input type="submit" value="Login"/>
    </form>
}

export default Login;