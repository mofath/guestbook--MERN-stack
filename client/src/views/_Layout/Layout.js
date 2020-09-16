import React, { useEffect, useState } from 'react';

import Message from '../UI/Message/Message';
import store from '../../_store/store';
import { authenticate, logoutAction } from '../../_store/modules/auth/actions';
import Menu from './Menu/Menu';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PreLoader from '../UI/PreLoader/PreLoader'
import classes from './Layout.module.css'

const Layout = (props) => {
    const authReducer = useSelector(state => state.authReducer);
    const { isAuthenticated, userInfo } = authReducer;
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            await store.dispatch(authenticate());
            setTimeout(() => setLoading(false), 2000);
        })()
    }, []);

    const history = useHistory();
    const handleLogout = async () => {
        try {
            await store.dispatch(logoutAction());
            history.replace('/');
        } catch (e) { }
    }


    return (
        <div>
            {
                Loading ?
                    <PreLoader />
                    :
                    <main classNam={classes.Main}>
                        {props.children}
                        <Menu
                            username={userInfo ? userInfo.username : null}
                            isAuthenticated={isAuthenticated}
                            logout={handleLogout}
                        />
                    </main>
            }
            <Message />
        </div>
    )
}

export default Layout;