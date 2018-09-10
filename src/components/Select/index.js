// @flow

import React from 'react';
import cn from 'classnames';

import style from './Select.styl';


type DataArrayType = {
    name: string | number,
    value: string | number
};

type PropsType = {
    onChange?: func,
    disabled?: boolean,
    className?: string,
    dataArray?: $Shape<DataArrayType>
};


const Select = (props: PropsType): React.Ref<'select'> => {
    const selectClasses = cn(
        style.select,
        props.className,
        props.disabled && style.disabled
    );

    return (
        <select
            {...props}
            className={selectClasses}
            onChange={(e: {}) => { props.onChange(e.target.value) }}
            ref={(ref: {}): React.Ref<'input'> => props.ref(ref)}
        >
            {
                props.dataArray.map((option: object): React.Element<'option'> => (
                    <option value={option.value}>{option.name}</option>
                ))
            }
        </select>
    );
};

Select.defaultProps = {
    ref: (ref: {}): React.Ref<'select'> => ref,
    dataArray: []
};


export default Select;
