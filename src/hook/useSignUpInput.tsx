import { useState } from "react";

const useSignUpInput = (init:any) => {
    const [value, setValue] = useState(init);
    const update = (property:string, newValue:string) => {
        const newState = {
            ...value,
            [property]: newValue,
        };
        console.log(newState);
        setValue(() => newState);
    };

    return [value, update];
};

export default useSignUpInput;
