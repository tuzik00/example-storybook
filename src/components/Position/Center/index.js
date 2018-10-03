// @flow

import React, {Component} from 'react';
import cn from 'classnames';


import style from './Center.styl';


type PropsType = {
    children: string,
    className?: string
};


const Center = (props: PropsType): React.Element<'div'> => {
    const {children, className} = props;
    
    return (
        <div className={cn(style.center, className)}>
            {children}
        </div>
    );
};


export default Center;