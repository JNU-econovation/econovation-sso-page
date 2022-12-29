import React from 'react';
import cardinals from '../constant/cardinals';
import CardinalOption from '../util/CardinalOptions';

interface MemberProp {
    setCardinal: (value:string) => void,
}
const Member = ({ setCardinal }:MemberProp) => {
    const onChange = (e:any) => {
        setCardinal(e.target.value);
    }
    return(<div className='member'>
        <h3>멤버 - 기수 선택</h3>
        <p>기수를 입력해주세요.</p>
        <select name='cardinal' onChange={onChange}>
            {cardinals.map((cardinal) => <CardinalOption value={cardinal} key={cardinal}/>)}
        </select>
    </div>);
};

export default Member;