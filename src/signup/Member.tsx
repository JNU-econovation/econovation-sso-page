import React from 'react';
const Member = () => {
    return (
    <div className="member-classification-container">
        <h3>에코노베이션 회원 여부</h3>
        <label>
            <input type='radio' name="classification" value='member' /> 네, 회원입니다.
        </label>
        <label>
            <input type='radio' name="classification" value='guest' checked/> 아니오, 비회원입니다.
        </label>
    </div>
    );
}

export default Member;