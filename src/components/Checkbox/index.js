// @flow

import React, {Component} from 'react'
import cn from 'classnames';
import style from './Checkbox.styl';


type PropsType = {
    active?: boolean,
    disabled?: boolean,
    onToggle: func
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
        }
    }

    componentWillReceiveProps(nextProps: {}) {
        if (this.state.isActive !== nextProps.active && !nextProps.disabled) {
            this.setState({
                isActive: nextProps.active
            })
        }
    }

    handleToggle() {
        const {disabled} = this.props;
        const {isActive} = this.state;

        if (disabled) {
            return;
        }

        this.setState({
            isActive: !isActive
        }, () => {
            this.props.onToggle(!isActive)
        })
    }

    render(): React.Element<'div'> {
        const {isActive} = this.state;
        const {disabled} = this.props;

        return (
            <div
                tabIndex="1"
                className={cn(style.checkbox, disabled && style.disabled, isActive && style.active)}
                onClick={() => { this.handleToggle() }}
            />
        )
    }
}


export default Checkbox;
