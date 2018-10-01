// @flow

import React, {PureComponent, Fragment} from 'react'
import cn from 'classnames';
import {TimelineMax} from 'gsap';
import Portal from '../Portal';

import style from './Sidebar.styl';


type PropsType = {
    children: React.Node,
    classNames: React.string,
    open?: boolean,
    animationDuration?: number,
    onClose: func
};

class Sidebar extends PureComponent<PropsType> {
    static defaultProps = {
        open: false,
        width: 300,
        animationDuration: .3,
        onClose: () => {}
    };

    constructor(props: object) {
        super(props);

        this.state = {
            isOpen: this.props.open,
            width: this.props.width,
            height: 0
        };

        this.$sidebar = null;
        this.$overlay = null;
    }

    componentDidMount() {
        this.setSidebarSize();
        window.addEventListener('resize', this.setSidebarSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSidebarSize);
    }

    componentWillReceiveProps(nextProps: object) {
        if (this.state.isOpen !== nextProps.open) {
            this.setState({
                isOpen: nextProps.open
            }, this.handleToggle)
        }
    }

    handleOutsideClick = () => {
        if (this.state.isOpen) {
            this.handleToggle(false);
        }
    };

    handleToggle = (isOpen: boolean = this.state.isOpen) => {
        const timeLine = new TimelineMax();
        const duration = this.props.animationDuration;

        if (isOpen) {
            timeLine
                .fromTo(
                    this.$sidebar,
                    duration,
                    {width: 0},
                    {width: this.state.width},
                    0
                )
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
                    this.$sidebar,
                    duration,
                    {width: this.state.width},
                    {width: 0},
                    0
                )
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

    setSidebarSize = () => {
        this.setState({
            height: window.innerHeight
        });
    };

    render(): React.Element<'div'> {
        const {children, classNames} = this.props;
        const {height, width, isOpen} = this.state;

        return isOpen ? (
            <Portal selector="body">
                <div
                    style={{height}}
                    className={cn(style.sidebar, classNames)}
                    ref={(el: HTMLElement): void => this.$sidebar = el}
                >
                    <div
                        className={style.content}
                        style={{width, height}}
                    >
                        {children}
                    </div>
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
