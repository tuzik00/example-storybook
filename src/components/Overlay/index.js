import React from 'react'
import cn from 'classnames';
import FadeIn from '../Animations/FadeIn';

import style from './Overlay.styl';


const Overlay = (props) => {
    const {children, className, show, onShow, onHide, onClick} = props;

    return (
        <FadeIn
            in={show}
            onEnter={onShow}
            onExit={onHide}
        >
            <div
                onClick={() => onClick()}
                className={cn(style.overlay, className)}
            >
                {children}
            </div>
        </FadeIn>
    );
};


Overlay.defaultProps = {
    open: false,
    onClick: () => {}
};


export default Overlay;
