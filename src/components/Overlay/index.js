import React from 'react'
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';

import './Overlay.styl';


const Overlay = (props) => {
    const {
        isShow,
        onEnter,
        onExited,
        onClick,
    } = props;

    const handleEnter = () => {
        document.body.classList.add('overflow');
        onEnter();
    };

    const handleExited = () => {
        document.body.classList.remove('overflow');
        onExited();
    };

    return (
        <CSSTransition
            in={isShow}
            timeout={200}
            unmountOnExit
            onEnter={handleEnter}
            onExited={handleExited}
            classNames={{
                enterActive: 'Overlay_enter',
                enterDone: 'Overlay_enter',
            }}
        >
            <div
                className={'Overlay'}
                onClick={onClick}
            />
        </CSSTransition>
    );
};

Overlay.propTypes = {
    isShow: PropTypes.bool,
    onClick: PropTypes.func,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

Overlay.defaultProps = {
    isShow: false,
    onClick: () => {},
    onEnter: () => {},
    onExited: () => {},
};


export default Overlay;
