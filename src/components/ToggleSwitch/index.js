import React, {Component} from 'react';
import cn from 'classnames';

import style from './ToggleSwitch.styl';


class ToggleSwitch extends Component {
    static defaultProps = {
        checked: false
    };

    constructor(props) {
        super(props);

        this.state = {
            isChecked: this.props.checked
        };
    }

    componentWillReceiveProps(nextProps) {
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
        }, () => onToggle(!isChecked))
    };


    render() {
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