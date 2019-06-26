import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Label.styl';


const Label = (props) => {
    const {
        text,
        children,
        className,
        required,
        error,
        inline,
    } = props;

    const classNames = cn(
        'Label',
        inline && 'Label_inline',
        className
    );

    return (
        <label className={classNames}>
            <div
                className={cn(
                    'Label__text',
                    error && 'Label__error',
                )}
            >
                {required
                    ? '*'
                    : null
                }
                {text}:
            </div>
            <div className={'Label__field'}>
                {children}
            </div>
        </label>
    );
};

Label.propTypes = {
    inline: PropTypes.bool,
    text: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.bool,
};


export default Label;
