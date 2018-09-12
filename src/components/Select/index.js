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
    dataArray?: $Shape<DataArrayType>
};


const Select = (props: PropsType): React.Ref<'select'> => {
    const {className, dataArray, disabled, ref, onChange} = props;

    const selectClasses = cn(
        style.select,
        className,
        disabled && style.disabled
    );

    return (
        <select
            className={selectClasses}
            onChange={(e: {}): func => onChange(e.target.value)}
            ref={ref}
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
    ref: (ref: {}): React.Ref<'select'> => ref,
    dataArray: []
};


export default Select;
