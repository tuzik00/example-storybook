// @flow

import React, {Component} from 'react';
import cn from 'classnames';

import style from './ToggleSwitch.styl';


type PropsType = {
    disabled?: boolean,
    checked?: boolean,
    onToggle?: func
};


class ToggleSwitch extends Component<PropsType> {
    static defaultProps = {
        checked: false
    };

    constructor(props: object) {
        super(props);

        this.state = {
            isChecked: this.props.checked
        };
    }

    componentWillReceiveProps(nextProps: PropsType) {
        if (this.state.isChecked !== nextProps.checked) {
            this.setState({
                isChecked: nextProps.checked
            })
        }
    }

    handleToggle = () => {
        const {disabled, onToggle} = this.props;
        const {isChecked} = this.state;

        if (disabled) {
            return;
        }

        this.setState({
            isChecked: !isChecked
        }, (): void => onToggle(!isChecked))
    };


    render(): React.Element<'div'> {
        const {isChecked} = this.state;
        const {disabled, className} = this.props;

        const classNames = cn(
            style.toggle__switch,
            disabled && style.disabled,
            isChecked && style.checked,
            className
        );

        return (
            <div
                className={classNames}
                onClick={this.handleToggle}
            />
        )
    }
}


export default ToggleSwitch;