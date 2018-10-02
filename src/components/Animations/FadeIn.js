// @flow

import React, {Component} from 'react';
import {TimelineMax} from 'gsap';
import Transition from 'react-transition-group/Transition';

type PropsType = {
    in: boolean,
    duration: number
};


class FadeIn extends Component<PropsType> {
    static defaultProps = {
        onEnter: () => {},
        onExit: () => {}
    };

    onEnter = (node: HTMLElement) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node, 0.6,
                {opacity: 0},
                {opacity: 1, clearProps: 'transform, opacity'},
                0
            );

        this.props.onEnter();
    };

    onExit = (node: HTMLElement) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node, 0.6,
                {opacity: 1},
                {opacity: 0},
                0
            )
            .call(this.props.onExit)
    };

    render(): React.Element<'Transition'> {
        const {in: inProp, children} = this.props;

        return (
            <Transition
                in={inProp}
                timeout={600}
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


export default FadeIn;
