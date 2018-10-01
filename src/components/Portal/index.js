// @flow


import React from 'react';
import ReactDOM from 'react-dom';


type PropsType = {
    children: React.Node,
    target: object,
    selector: string
};


const Portal = (props: PropsType): React.Element => {
    const { children, selector, target } = props;

    return typeof document !== 'undefined' && (target || document.querySelector(selector))
        ? ReactDOM.createPortal(children, target || document.querySelector(selector))
        : null;
};


Portal.defaultProps = {
    target: undefined
};


export default Portal;
