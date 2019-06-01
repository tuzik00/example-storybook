import React from 'react';
import cn from 'classnames';

import style from './Position.styl';


const Position = (props) => {
    const {children, left, right, center, className} = props;

    return (
        <div className={
            cn(
                style.position,
                left && style.left,
                right && style.right,
                center && style.center,
                className
            )}
        >
            {children}
        </div>
    );
};


export default Position;