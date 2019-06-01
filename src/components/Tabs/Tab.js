import React from 'react';
import cn from 'classnames';

import style from './Tab.styl';


const Tab = (props) => {
    return (
        <div className={cn(style.tab, props.className)}>
            {props.children}
        </div>
    );
};


export default Tab;
