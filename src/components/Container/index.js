import React from 'react';
import cn from 'classnames';

import './Container.styl';


const Container = (props) => {
    const { children, className } = props;

    return (
        <div className={cn(className, 'Container')}>
            {children}
        </div>
    );
};


export default Container;
