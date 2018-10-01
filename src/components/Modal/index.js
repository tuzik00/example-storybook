// @flow

import React, {PureComponent, Fragment} from 'react'
import cn from 'classnames';
import {TimelineMax} from 'gsap';
import Portal from '../Portal';

import style from './Modal.styl';


type PropsType = {
    children: React.Node,
    classNames: React.string,
    open?: boolean,
    maxWidth?: number,
    onClose: func
};

class Sidebar extends PureComponent<PropsType> {
    static defaultProps = {
        open: false,
        maxWidth: 500,
        onClose: () => {
        }
    };

    constructor(props: object) {
        super(props);

        this.state = {
            isOpen: this.props.open
        };

        this.$overlay = null;
        this.$modal = null;
    }

    componentWillReceiveProps(nextProps: object) {
        if (this.state.isOpen !== nextProps.open) {
            this.setState({
                isOpen: nextProps.open
            }, this.handleToggle);
        }
    }

    handleOutsideClick = () => {
        if (this.state.isOpen) {
            this.handleToggle(false);
        }
    };

    handleToggle = (isOpen: boolean = this.state.isOpen) => {
        const timeLine = new TimelineMax();
        const duration = 0.3;

        if (isOpen) {
            timeLine
                .fromTo(
                    this.$overlay,
                    duration,
                    {opacity: 0},
                    {opacity: 1},
                    0
                )
        } else {
            timeLine
                .fromTo(
                    this.$overlay,
                    duration,
                    {opacity: 1},
                    {opacity: 0},
                    0,
                )
                .call(() => {
                    this.setState({
                        isOpen: false
                    }, this.props.onClose);
                })
        }

        timeLine.play();
    };

    render(): React.Element<'div'> {
        const {children, classNames, maxWidth} = this.props;
        const {isOpen} = this.state;

        return isOpen ? (
            <Portal selector="body">
                <div
                    style={{maxWidth}}
                    className={cn(style.modal, classNames)}
                    ref={(el: HTMLElement): void => this.$modal = el}
                >
                    {children}
                </div>

                <div
                    onClick={this.handleOutsideClick}
                    ref={(el: HTMLElement): HTMLElement => this.$overlay = el}
                    className={style.overlay}
                />
            </Portal>
        ) : null
    }
}


export default Sidebar;
