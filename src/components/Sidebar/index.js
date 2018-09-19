// @flow

import React, {PureComponent} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import {TimelineMax} from 'gsap';

import style from './Sidebar.styl';


type PropsType = {
    children: React.Node,
    open?: boolean,
    onClose: func
};

class Sidebar extends PureComponent<PropsType> {
    static defaultProps = {
        open: false,
        onClose: () => {
        }
    };

    constructor(props: object) {
        super(props);

        this.state = {
            isOpen: this.props.open,
            height: 0,
            width: 0
        };

        this.$sidebar = null;
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
        const node = this.$sidebar;
        const duration = 250 / 1000;

        if (isOpen) {
            // timeLine
            //     .fromTo(
            //         node,
            //         duration,
            //         {width: 0},
            //         {width: width},
            //         0
            //     )
        } else {
            timeLine
                .fromTo(
                    node,
                    duration,
                    {width: 0},
                    {width: `${width}px`},
                    0
                )
        }

        timeLine.play();

        // if (!isOpen) {
        //     this.props.onClose();
        // }
    };

    setSidebarSize = () => {
        if (!this.$sidebar) {
            return;
        }

        this.setState({
            height: window.innerHeight,
            width: this.$sidebar.offsetWidth
        }, this.handleToggle);
    };

    render(): React.Element<'div'> {
        const {children} = this.props;
        const {height} = this.state;

        const sidebarStyle = {
            height
        };

        return (
            <OutsideClickHandler
                onOutsideClick={this.handleOutsideClick}
            >
                <div
                    style={sidebarStyle}
                    className={style.sidebar}
                    ref={(el: HTMLElement): void => this.$sidebar = el}
                >
                    {children}
                </div>
            </OutsideClickHandler>
        );
    }
}

export default Sidebar;
