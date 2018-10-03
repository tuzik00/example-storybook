// @flow

import React from 'react'
import cn from 'classnames';
import FadeIn from '../Animations/FadeIn';

import style from './Overlay.styl';


type PropsType = {
    children: React.Node,
    className: React.string,
    show?: boolean,
    onClick: func
};


const Overlay = (props: PropsType): React.Element<'FadeIn'> => {
    const {children, className, show, onShow, onHide, onClick} = props;

    return (
        <FadeIn
            in={show}
            onEnter={onShow}
            onExit={onHide}
        >
            <div
                onClick={(): void => onClick()}
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
