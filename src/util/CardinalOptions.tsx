import React from 'react';

interface CardinalOptionProps {
    value: number
}
const CardinalOption = ({ value }:CardinalOptionProps) => {
    return <option value={value}>{value}기</option>
};

export default CardinalOption;