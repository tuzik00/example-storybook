import React, {Component} from 'react';
import {TimelineMax} from 'gsap';
import Transition from 'react-transition-group/Transition';


class FadeAndScale extends Component {
    static defaultProps = {
        duration: 0.6,
        onEnter: () => {},
        onExit: () => {}
    };

    onEnter = (node) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node,
                0.2,
                {scale: 0.7, opacity: 0},
                {scale: 1, opacity: 1, clearProps: 'transform, opacity'},
                0
            );

        this.props.onEnter();
    };

    onExit = (node) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node,
                0.2,
                {scale: 1, opacity: 1},
                {scale: 0.7, opacity: 0},
                0
            )
            .call(this.props.onExit)
    };

    render() {
        const {in: inProp, children} = this.props;

        return (
            <Transition
                in={inProp}
                timeout={200}
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


export default FadeAndScale;
