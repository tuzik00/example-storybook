// @flow

import React, {Component} from 'react'
import cn from 'classnames';

import style from './Checkbox.styl';


type PropsType = {
    active?: boolean,
    disabled?: boolean,
    onToggle: func,
    className?: string
};

type StateType = {
    isActive: boolean
};


class Checkbox extends Component<PropsType, StateType> {
    static defaultProps = {
        onToggle: () => {},
        active: false,
        disabled: false
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            isActive: this.props.active
        };
    }

    componentWillReceiveProps(nextProps: PropsType) {
        if (this.state.isActive !== nextProps.active && !nextProps.disabled) {
            this.setState({
                isActive: nextProps.active
            });
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
        }, (): void => onToggle(!isActive))
    };

    render(): React.Element<'div'> {
        const {isActive} = this.state;
        const {disabled, className} = this.props;

        const classNames = cn(
            style.checkbox,
            isActive && style.active,
            disabled && style.disabled,
            className,
        );

        return (
            <div
                tabIndex={0}
                className={classNames}
                onClick={this.handleToggle}
            />
        )
    }
}


export default Checkbox;
