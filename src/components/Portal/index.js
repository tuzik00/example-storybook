// @flow


import React from 'react';
import ReactDOM from 'react-dom';


type PropsType = {
    children: React.Node,
    target: HTMLSelectElement,
    selector: string
};


const Portal = (props: PropsType): React.Node => {
    const { children, selector, target } = props;

    return typeof document !== 'undefined' && (target || document.querySelector(selector))
        ? ReactDOM.createPortal(children, target || document.querySelector(selector))
        : null;
};


export default Portal;
