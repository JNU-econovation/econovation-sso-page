import React from "react";

import './SignUp.css'

const SignUp = () => {    
    
    return <div className='container'>
        <form>
            <h1>회원가입</h1>
            <h3>에코노베이션 회원 여부</h3>
            <div className="member-classification-container">
                <label>
                    <input type='radio' name="classification" value='member' /> 네, 회원입니다.
                </label>
                <label>
                    <input type='radio' name="classification" value='guest' /> 아니오, 비회원입니다.
                </label>
            </div>
            <h3>아이디</h3>
            <p>아이디로 사용할 이메일을 입력하시고 중복확인 해주세요.</p>
            <input type='text' placeholder="example@jnu.ac.kr"/><button>중복확인</button>
            <h3>비밀번호</h3>
            <label>
                비밀번호 입력 : <input type='password'/>
            </label>
            <label>
                비밀번호 확인 : <input type='password' />
            </label>
            <button>회원가입</button>
        </form>
    </div>
}

export default SignUp;