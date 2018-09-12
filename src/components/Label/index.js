// @flow

import React from 'react';
import cn from 'classnames';

import style from './Label.styl';


type PropsType = {
    children: React.Node,
    className?: string,
    text?: string,
    required?: boolean,
    error?: boolean
};


const Label = (props: PropsType): React.Element<'label'> => {
    const { text, children, className, required, error } = props;

    const classNames = cn(
        style.label,
        className
    );

    return (
        <label className={classNames}>
            <div className={cn(style.text, error && style.error)}>
                {required ? '*' : null}{text}:
            </div>
            <div className={style.field}>
                {children}
            </div>
        </label>
    );
};


export default Label;
