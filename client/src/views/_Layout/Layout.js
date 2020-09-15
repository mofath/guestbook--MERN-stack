import React, { useEffect } from 'react';

import Message from '../UI/Message/Message';
import store from '../../_store/store';
import { authenticate, logoutAction } from '../../_store/modules/auth/actions';
import Menu from './Menu/Menu';
import { useSelector } from 'react-redux';
import {useHistory } from 'react-router-dom';


const Layout = (props) => {
    const authReducer = useSelector(state => state.authReducer);
    const { isAuthenticated, userInfo } = authReducer;

    useEffect(() => { store.dispatch(authenticate()) }, []);

    const history = useHistory();
    const handleLogout = async() => { 
        try{
           await store.dispatch(logoutAction()); 
           history.replace('/');

        } catch(e){}
    }


    return (
        <div>
            <main>{props.children}</main>
            <Menu
                username={userInfo ? userInfo.username : null}
                isAuthenticated={isAuthenticated}
                logout={handleLogout}
            />
            <Message />
        </div>
    )
}

export default Layout;