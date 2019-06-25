import React from 'react';
import cn from 'classnames';

import './Content.styl';


const Content = (props) => {
    const {
        classNames,
        children,
    } = props;

    return (
        <p className={cn(classNames, 'Content')}>
            {children}
        </p>
    );
};


export default Content;
