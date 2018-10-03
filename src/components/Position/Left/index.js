// @flow

import React, {Component} from 'react';
import cn from 'classnames';


import style from './Left.styl';


type PropsType = {
    children: string,
    className?: string
};


const Left = (props: PropsType): React.Element<'div'> => {
    const {children, className} = props;
    
    return (
        <div className={cn(style.left, className)}>
            {children}
        </div>
    );
};


export default Left;