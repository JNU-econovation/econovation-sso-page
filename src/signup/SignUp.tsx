import React, { useState } from "react";
import Email from "../Email";
import Guest from "./Guest";
import Member from "./Member";
import Membership from "./Membership";

import Password from "./Password";
import './SignUp.css'

const isMember = (member:string) => {
    switch(member){
        case 'member':
            return <Member />
        case 'guest':
            return <Guest />
        default:
            return <></>
    }
}
const SignUp = () => {  
    const [membership, setMembership] = useState('');

    return <div className='container'>
        <form>
            <h1>회원가입</h1>
            <Membership setValue={setMembership}/>
            {isMember(membership)}
            <Email />
            <Password />
            <button type='submit'>회원가입</button>
        </form>
    </div>
}

export default SignUp;