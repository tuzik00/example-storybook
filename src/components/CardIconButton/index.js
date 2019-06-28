import React from 'react';
import PropTypes from 'prop-types';
import {Card} from '../../';

import './CardIconButton.styl';


const CardIconButton = (props) => {
    const {
        icon,
        onClick,
        dark,
        children,
        style,
    } = props;

    return (
        <Card
            className={'CreateAccountButton'}
            style={style}
            dark={dark}
            onClick={onClick}
        >
            <Card.Container className={'CreateAccountButton__card'}>
                {React.cloneElement(icon, {className: 'CreateAccountButton__icon'})}
                <span className={'CreateAccountButton__text'}>
                    {children}
                </span>
            </Card.Container>
        </Card>
    )
};

CardIconButton.propTypes = {
    icon: PropTypes.node,
    onClick: PropTypes.func,
    dark: PropTypes.bool,
    children: PropTypes.node,
};


export default CardIconButton;