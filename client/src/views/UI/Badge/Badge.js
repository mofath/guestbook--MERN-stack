
import React from 'react';

import classes from './Badge.module.css'


const Badge = (props) =>
    <div>
        {props.badgeContent > 0 &&
            <div className={classes.Badge}>
                <p className={classes.BadgeValue}>{props.badgeContent}</p>
            </div>
        }
        {props.children}
    </div>


export default Badge;