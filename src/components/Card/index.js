import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Card.styl';


const Card = (props) => {
    const {
        children,
        className,
        dark,
    } = props;

    return (
        <section
            className={cn(
                className,
                'Card', {
                    'Card_theme-dark': dark,
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