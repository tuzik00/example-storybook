// @flow

import React from 'react';
import cn from 'classnames';

import style from './Select.styl';


type PropsType = {
    onChange?: func,
    disabled?: boolean,
    dataArray?: array
};


const Select = (props: PropsType): React.Element<'select'> => {
    const selectClasses = cn(style.select,
        (props.disabled && style.disabled)
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
    ref: (ref: {}): React.Element<'select'> => ref
};


export default Select;