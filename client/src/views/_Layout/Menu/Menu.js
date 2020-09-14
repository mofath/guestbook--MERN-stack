import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { GrLogout as LogoutIcon } from 'react-icons/gr';
import { GrLogin as LogIcon } from 'react-icons/gr';
import { FiUser as UserIcon } from 'react-icons/fi';



import classes from './Menu.module.css'

const Menu = ({ isAuthenticated, username, logout }) => {

    return (
        <div className={classes.Menu}>
            <div className={[classes.MenuToggler, classes.MenuItem].join(' ')}>
                <span>+</span>
            </div>

            <ul className={classes.MenuList}>
                {
                    isAuthenticated ?
                        <Fragment>
                            <li >
                                <span className={classes.Label}>bye, bye!</span>
                                <button
                                    onClick={() => logout()}
                                    className={classes.MenuItem}>
                                    <i><LogoutIcon /> </i>
                                </button>
                            </li>

                            <li >
                                <span className={classes.Label}>hello, <span style={{ color: "yellow" }}>{username}</span></span>
                                <div className={classes.MenuItem}>
                                    <i><UserIcon color="black" size="20px" /></i>
                                </div>
                            </li>
                        </Fragment>
                        :
                        <li >
                            <span className={classes.Label}>hello, <span style={{ color: "yellow" }}>login</span></span>
                            <div className={classes.MenuItem}>
                                <Link to="/">
                                    <i><LogIcon color="black" size="20px" /></i>
                                </Link>

                            </div>
                        </li>
                }
            </ul>
            <div className={classes.MenuToggler}  >
            </div>
        </div>
    )
}
export default Menu;