import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Card.styl';


const Card = (props) => {
    const {
        children,
        className,
        style,
        dark,
        onClick,
    } = props;

    return (
        <section
            onClick={onClick}
            style={style}
            className={cn(
                className,
                'Card', {
                    'Card_theme-dark': dark,
                    'Card_active': typeof onClick === 'function',
                }
            )}
        >
            {children}
        </section>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dark: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
};




Card.Container = (props) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={cn(className, 'Card__container')}>
            {children}
        </div>
    );
};

Card.Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};


Card.Media = (props) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={cn(className, 'Card__media')}>
            {children}
        </div>
    );
};

Card.Media.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};


export default Card;