// @flow

import React, {Component} from 'react'
import cn from 'classnames';
import style from './Checkbox.styl';


type PropsType = {
    active?: boolean,
    disabled?: boolean,
    onToggle: func,
    ref?: func,
    className?: string
};

type StateType = {
    isActive: boolean
};


class Checkbox extends Component<PropsType, StateType> {
    static defaultProps = {
        onToggle: () => {},
        active: false,
        disabled: false,
        ref: (ref: {}): React.Element<'div'> => ref
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            isActive: this.props.active
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps: {}) {
        if (this.state.isActive !== nextProps.active && !nextProps.disabled) {
            this.setState({
                isActive: nextProps.active
            })
        }
    }

    handleToggle = () => {
        const {disabled, onToggle} = this.props;
        const {isActive} = this.state;

        if (disabled) {
            return;
        }

        this.setState({
            isActive: !isActive
        }, (): func => onToggle(!isActive))
    };

    render(): React.Element<'div'> {
        const {isActive} = this.state;
        const {disabled, className, ref} = this.props;

        const checkboxClasses = cn(
            style.checkbox,
            className,
            disabled && style.disabled,
            isActive && style.active
        );

        return (
            <div
                tabIndex={0}
                ref={ref}
                className={checkboxClasses}
                onClick={this.handleToggle}
            />
        )
    }
}


export default Checkbox;
