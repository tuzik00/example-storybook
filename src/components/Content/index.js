import React from 'react';
import cn from 'classnames';

import style from './Content.styl';


const Content = (props) => {
    const { classNames, children } = props;

    return (
        <p className={cn(style.content, classNames)}>
            {children}
        </p>
    );
};


export default Content;
