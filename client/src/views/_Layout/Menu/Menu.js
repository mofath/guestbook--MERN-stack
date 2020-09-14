import React, { Fragment, useState } from 'react';
import { GrLogout as LogoutIcon } from 'react-icons/gr';
import {  GrLogin as LogIcon } from 'react-icons/gr';

import { FiUser as UserIcon } from 'react-icons/fi';




import classes from './Menu.module.css'

const Menu = ({ isAuthenticated, username }) => {

    return (
        <div className={classes.Menu}>
            <div className={[classes.MenuToggler, classes.MenuItem].join(' ')}>
                <span>+</span>
            </div>

            <ul className={classes.MenuList}>


                {isAuthenticated ? <Fragment>
                    <li >
                        <span className={classes.Label}>bye, bye!</span>
                        <div className={classes.MenuItem}>
                            <i><LogoutIcon /> </i>
                        </div>
                    </li>

                    <li >
                        <span className={classes.Label}>hello, {username}</span>
                        <div className={classes.MenuItem}>
                            <i><UserIcon color="black" size="20px" /></i>
                        </div>
                    </li>
                </Fragment> :

                    <li >
                        <span className={classes.Label}>hello, login</span>
                        <div className={classes.MenuItem}>
                            <i><LogIcon color="black" size="20px" /></i>
                        </div>
                    </li>
                }
            </ul>
            <div
                className={classes.MenuToggler}

            >
            </div>
        </div>


    )
}
export default Menu;