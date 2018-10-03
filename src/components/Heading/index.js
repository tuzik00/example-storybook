// @flow

import React from 'react';
import cn from 'classnames';

import style from './Heading.styl';


type PropsType = {
    children: string,
    className?: string,
    tagName?: string,
    type?: '1' | '2' | '3' | '4' | '5' | '6'
};


const Heading = (props: PropsType): React.Element<'h1'> => {
    const { children, tagName, className, type } = props;

    const classNames = cn(
        style.heading,
        style[`type${type}`],
        className
    );

    const TagName = tagName ? tagName : `h${type}`;

    return (
        <TagName className={classNames}>
            {children}
        </TagName>
    );
};

Heading.defaultProps = {
    type: '1'
};


export default Heading;
