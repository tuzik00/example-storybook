import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Card} from '../../';

import './CardIconButton.styl';


const CardIconButton = (props) => {
    const {
        className,
        icon,
        onClick,
        dark,
        children,
        style,
        isActive,
    } = props;

    return (
        <Card
            className={cn(className, 'CardIconButton', isActive && 'CardIconButton_active')}
            style={style}
            dark={dark}
            onClick={onClick}
        >
            <Card.Container className={'CardIconButton__card'}>
                {React.cloneElement(icon, {className: 'CardIconButton__icon'})}
                <span className={'CardIconButton__text'}>
                    {children}
                </span>
            </Card.Container>
        </Card>
    )
};

CardIconButton.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    dark: PropTypes.bool,
    children: PropTypes.node,
    isActive: PropTypes.bool,
};


export default CardIconButton;