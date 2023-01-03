import React from 'react';
interface MemberProps {
  setValue: (value: string) => void;
}

const Membership = ({ setValue }: MemberProps) => {
  const onClick = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="member-classification-container">
      <h3>에코노베이션 회원 여부</h3>
      <label>
        <input
          type="radio"
          name="classification"
          value="member"
          onClick={onClick}
        />{' '}
        네, 회원입니다.
      </label>
      <label>
        <input
          type="radio"
          name="classification"
          value="guest"
          onClick={onClick}
        />{' '}
        아니오, 비회원입니다.
      </label>
    </div>
  );
};

export default Membership;
