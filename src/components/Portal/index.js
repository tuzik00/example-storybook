import React from 'react';
import ReactDOM from 'react-dom';


const Portal = (props) => {
    const { children, selector, target } = props;

    return typeof document !== 'undefined' && (target || document.querySelector(selector))
        ? ReactDOM.createPortal(children, target || document.querySelector(selector))
        : null;
};


export default Portal;
