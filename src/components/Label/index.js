// @flow

import React from 'react';
import cn from 'classnames';

import style from './Label.styl';


type PropsType = {
    children: React.Node,
    className?: string
};


const Label = (props: PropsType): React.Element<'label'> => {
    return (
        <label className={cn(style.label, props.className)}>
            {props.children}
        </label>
    );
};


export default Label;
