import React, {useEffect} from 'react';

import Message from '../UI/Message/Message';
import store from '../../_store/store';
import { authenticate, logoutAction } from '../../_store/modules/auth/actions';
import Menu from './Menu/Menu';
import { useSelector } from 'react-redux';


function Layout(props) {
    const authReducer = useSelector(state => state.authReducer);
    const { isAuthenticated, userInfo } = authReducer;

    useEffect(() => { store.dispatch(authenticate()) }, [])

    return (
        <div>
            <main>{props.children}</main>
            <Menu username={userInfo.username} isAuthenticated={isAuthenticated}/>
            <Message />
        </div>
    )
}

export default Layout;