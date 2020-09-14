
import React from 'react';

import avatar from '../../../assets/imgs/avatar.png';

const defaultStyle = {
    verticalAlign: "middle",
    borderRadius: "50%",
    border: "1px solid #e8e8e8",
};

const defaultAvataSize = {
    maxWidth: "50px",
    maxHeight: "50px,",
    marginRight: "15px",
};


const Avatar = ({ img, size }) =>
    <img
        src={img ? img : avatar}

        style=
        {
            size ?
                { width: size, height: size, ...defaultStyle } :
                { ...defaultAvataSize, ...defaultStyle }
        }
        alt=""
    />

export default Avatar;