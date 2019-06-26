import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Select.styl';


const Select = (props) => {
    const {
        className,
        dataArray,
        disabled,
        onChange,
        dark,
        ...rest
    } = props;

    const selectClasses = cn(
        'Select',
        disabled && 'Select_disabled',
        dark && 'Select_theme-dark',
        className
    );

    return (
        <select
            className={selectClasses}
            onChange={(e) => onChange(e.target.value)}
            {...rest}
        >
            {dataArray.map((option, index) => (
                <option
                    key={index}
                    value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

Select.propTypes = {
    dataArray: PropTypes.array,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    dark: PropTypes.bool,
};

Select.defaultProps = {
    dataArray: [],
    onChange: () => {},
    disabled: false,

};


export default Select;
