import React, { useState } from "react";
import Email from "../Email";
import Member from "./Member";

import Password from "./Password";
import './SignUp.css'

const isMember = (selectOption:string) => {
    return selectOption === 'member';
}

const SignUp = () => {    
    
    return <div className='container'>
        <form>
            <h1>회원가입</h1>
            <Member/>
            <Email />
            <Password />
            <button>회원가입</button>
        </form>
    </div>
}

export default SignUp;