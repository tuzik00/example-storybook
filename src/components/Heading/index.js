import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Heading.styl';


const Heading = (props) => {
    const {
        children,
        tagName,
        className,
        type,
    } = props;

    const classNames = cn(
        'Heading',
        `Heading_type${type}`,
        className,
    );

    const TagName = tagName
        ? tagName
        : `h${type}`;

    return (
        <TagName className={classNames}>
            {children}
        </TagName>
    );
};

Heading.propTypes = {
    type: PropTypes.number,
};

Heading.defaultProps = {
    type: 1
};


export default Heading;
