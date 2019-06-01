import React from 'react';
import cn from 'classnames';

import style from './Select.styl';


const Select = (props) => {
    const {className, dataArray, disabled, onChange, ...otherProps} = props;

    const selectClasses = cn(
        style.select,
        disabled && style.disabled,
        className
    );

    return (
        <select
            className={selectClasses}
            onChange={(e) => onChange(e.target.value)}
            {...otherProps}
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


Select.defaultProps = {
    dataArray: [],
    onChange: () => {},
    disabled: false
};


export default Select;
