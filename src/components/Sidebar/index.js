// @flow

import React, {PureComponent, Fragment} from 'react'
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import {TimelineMax} from 'gsap';

import style from './Sidebar.styl';


type PropsType = {
    children: React.Node,
    classNames: React.string,
    open?: boolean,
    onClose: func
};

class Sidebar extends PureComponent<PropsType> {
    static defaultProps = {
        open: false,
        width: 300,
        onClose: () => {
        }
    };

    constructor(props: object) {
        super(props);

        this.state = {
            isOpen: this.props.open,
            width: this.props.width,
            height: 0,
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
        this.setState({
            isOpen: nextProps.open
        }, this.handleToggle)
    }

    handleOutsideClick = () => {
        if (!this.state.isOpen) {
            return;
        }

        this.setState({
            isOpen: false
        }, this.handleToggle);
    };

    handleToggle = () => {
        const {isOpen, width} = this.state;
        const timeLine = new TimelineMax({paused: true});
        const $sidebar = this.$sidebar;
        const $overlay = this.$overlay;
        const duration = 250 / 1000;

        if (isOpen) {
            timeLine
                .fromTo(
                    $sidebar,
                    duration,
                    {width: 0},
                    {width},
                    0
                )
                .fromTo(
                    $overlay,
                    duration,
                    {opacity: 0},
                    {opacity: 1},
                    0
                )
        } else {
            timeLine
                .fromTo(
                    $sidebar,
                    duration,
                    {width},
                    {width: 0},
                    0
                )
                // .fromTo(
                //     $overlay,
                //     duration,
                //     {opacity: 1},
                //     {opacity: 0},
                //     0
                // )
        }

        timeLine.play();

        if (!isOpen) {
            this.props.onClose();
        }
    };

    setSidebarSize = () => {
        if (!this.$sidebar) {
            return;
        }

        this.setState({
            height: window.innerHeight,
        });
    };

    render(): React.Element<'div'> {
        const {children, classNames} = this.props;
        const {height, width, isOpen} = this.state;

        return (
            <Fragment>
                <OutsideClickHandler
                    onOutsideClick={this.handleOutsideClick}
                >
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
                </OutsideClickHandler>
                {isOpen ? (
                    <div
                        ref={(el: HTMLElement): HTMLElement => this.$overlay = el}
                        className={style.overlay}
                    />
                ) : null}
            </Fragment>
        );
    }
}


export default Sidebar;
