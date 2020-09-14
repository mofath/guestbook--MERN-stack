import React, { Fragment, useState, useEffect } from 'react'

import { useSelector } from 'react-redux';

import Menu from './Menu/Menu'
// import Message from '../UI/Message/Message'

import store from '../../_store/store';

import { authenticate, logoutAction } from '../../_store/modules/auth/actions';

function Layout(props) {

    useEffect(() => { store.dispatch(authenticate()) }, [])

    return (
        <div>
            <main>{props.children}</main>
            <Menu />
        </div>
    )
}

export default Layout;