// @flow

import React from 'react';
import cn from 'classnames';

import style from './Select.styl';


type DataArrayType = {
    name: string,
    value: string
};

type PropsType = {
    onChange?: func,
    disabled?: boolean,
    className?: string,
    dataArray?: DataArrayType
};


const Select = (props: PropsType): React.Element<'select'> => {
    const {className, dataArray, disabled, onChange, ...otherProps} = props;

    const selectClasses = cn(
        style.select,
        disabled && style.disabled,
        className
    );

    return (
        <select
            className={selectClasses}
            onChange={(e: MouseEvent): void => onChange(e.target.value)}
            {...otherProps}
        >
            {dataArray.map((option: DataArrayType, index: number): React.Element<'option'> => (
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
