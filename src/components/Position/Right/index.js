// @flow

import React, {Component} from 'react';
import cn from 'classnames';


import style from './Right.styl';


type PropsType = {
    children: string,
    className?: string
};


const Right = (props: PropsType): React.Element<'div'> => {
    const {children, className} = props;
    
    return (
        <div className={cn(style.right, className)}>
            {children}
        </div>
    );
};


export default Right;