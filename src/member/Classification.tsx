import React from "react";
import { useSetRecoilState } from "recoil";
import { userClassState } from "../atom/userClassState";

const Classification = () => {
    const setUserClass = useSetRecoilState(userClassState);

    const onClick = ({ target: { value }}:any) => {
        console.log('value', value);
        setUserClass(() => value);
    }  
    return (
    <div className="member-classification-container">
        <label>
            <input type='radio' name="classification" value='member' onClick={onClick}/> 네, 회원입니다.
        </label>
        <label>
            <input type='radio' name="classification" value='guest' onClick={onClick}/> 아니오, 비회원입니다.
        </label>
</div>)
};

export default Classification;