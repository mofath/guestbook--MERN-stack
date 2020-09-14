import React, {useEffect} from 'react';

import Message from '../UI/Message/Message';
import store from '../../_store/store';
import { authenticate, logoutAction } from '../../_store/modules/auth/actions';

function Layout(props) {

    useEffect(() => { store.dispatch(authenticate()) }, [])

    return (
        <div>
            <main>{props.children}</main>
            <Message />
        </div>
    )
}

export default Layout;