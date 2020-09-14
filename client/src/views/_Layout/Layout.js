import React from 'react';
import Message from '../UI/Message/Message';


function Layout(props) {


    return (
        <div>
            <main>{props.children}</main>
            <Message />
        </div>
    )
}

export default Layout;