import React from 'react';
import cn from 'classnames';

import style from './Layout.styl';


export const Header = (props) => {
    const { children, className } = props;

    return (
        <div className={cn(style.header, className)}>
            {children}
        </div>
    );
};


export const Body = (props) => {
    const { children, className } = props;

    return (
        <div className={cn(style.body, className)}>
            {children}
        </div>
    );
};


export const Footer = (props) => {
    const { children, className } = props;

    return (
        <div className={cn(style.footer, className)}>
            {children}
        </div>
    );
};

