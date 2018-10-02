// @flow

import React from 'react'
import cn from 'classnames';
import FadeIn from '../Animations/FadeIn';


import style from './Overlay.styl';


type PropsType = {
    children: React.Node,
    classNames: React.string,
    show?: boolean,
    onShow: func,
    onHide: func,
    onClick: func
};


const Overlay = (props: PropsType): React.Element<'FadeIn'> => {
    const {children, classNames, show, onShow, onHide, onClick} = props;

    return (
        <FadeIn
            in={show}
            onEnter={onShow}
            onExit={onHide}
        >
            <div
                onClick={(): void => onClick()}
                className={cn(style.overlay, classNames)}
            >
                {children}
            </div>
        </FadeIn>
    );
};


Overlay.defaultProps = {
    open: false,
    onShow: () => {},
    onHide: () => {},
    onClick: () => {}
};


export default Overlay;
