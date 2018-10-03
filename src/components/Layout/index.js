// @flow

import React from 'react';
import cn from 'classnames';

import style from './Layout.styl';


type PropsType = {
    children: React.node,
    className?: string
};


export const Header = (props: PropsType): React.element<'div'> => {
    const { children, className } = props;

    return (
        <div className={cn(style.header, className)}>
            {children}
        </div>
    );
};


export const Body = (props: PropsType): React.element<'div'> => {
    const { children, className } = props;

    return (
        <div className={cn(style.body, className)}>
            {children}
        </div>
    );
};


export const Footer = (props: PropsType): React.element<'div'> => {
    const { children, className } = props;

    return (
        <div className={cn(style.footer, className)}>
            {children}
        </div>
    );
};

