import React from 'react';
import cn from 'classnames';

import style from './Label.styl';


const Label = (props) => {
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
