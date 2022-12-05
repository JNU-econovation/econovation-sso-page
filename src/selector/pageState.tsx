import React from 'react';

import { selector } from "recoil";
import { currentPageState } from "../atom/currentPageState";
import Email from "../Email";
import Login from '../Login';
import Member from "../member/Member";
import Password from '../Password';
import PinCode from '../PinCode';

export const pageState = selector({
    key: 'pageState',
    get: ({get}) => {
        const title = get(currentPageState);
        
        switch(title) {
            case 'email':
                return <Email />;
            case 'password':
                return <Password />;
            case 'pincode':
                return <PinCode />;
            case 'success':
                return <Login />;
            default:
                return <Member />;
        }
    }
});