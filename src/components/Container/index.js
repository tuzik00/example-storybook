import React from 'react';
import cn from 'classnames';
import style from './Container.styl';


const Container = (props) => {
    const { children, className } = props;
    
    return (
        <div className={cn(style.container, className)}>
            {children}
        </div>
    );
};


export default Container;
