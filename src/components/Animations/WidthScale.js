// @flow

import React, {Component} from 'react';
import {TimelineMax} from 'gsap';
import Transition from 'react-transition-group/Transition';

type PropsType = {
    in: boolean,
    duration: number,
    width: number
};


class WidthScale extends Component<PropsType> {
    static defaultProps = {
        width: 0,
        onEnter: () => {},
        onExit: () => {}
    };

    onEnter = (node: HTMLElement) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node,
                0.3,
                {width: 0},
                {width: this.props.width},
                0
            );

        this.props.onEnter();
    };

    onExit = (node: HTMLElement) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node,
                0.3,
                {width: this.props.width},
                {width: 0},
                0
            )
            .call(this.props.onExit)
    };

    render(): React.Element<'Transition'> {
        const {in: inProp, children} = this.props;

        return (
            <Transition
                in={inProp}
                timeout={300}
                onEnter={this.onEnter}
                onExit={this.onExit}
                unmountOnExit
                mountOnEnter
            >
                {children}
            </Transition>
        );
    }
}


export default WidthScale;
