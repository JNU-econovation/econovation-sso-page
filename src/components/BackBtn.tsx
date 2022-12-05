import React from 'react';
interface BackButton {
    text:string
}
const BackBtn = ({ text }:BackButton) => {
    return <button>{text}</button>
};

export default BackBtn;