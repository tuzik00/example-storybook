import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './List.styl';


const List = (props) => {
    const {
        className,
        children,
        dotted,
    } = props;

    return (
        <section className={cn(className, 'List', dotted && 'List_dotted')}>
            {children}
        </section>
    );
};

List.propTypes = {};

List.defaultProps = {
    dotted: false
};


List.Item = (props) => {
    const {
        className,
        children,
        onClick,
    } = props;

    return (
        <div
            className={cn(
                className,
                'List__item',
                'List__item_activate'
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

List.Item.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};


export default List;
