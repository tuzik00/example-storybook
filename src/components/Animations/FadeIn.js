import React, {Component} from 'react';
import {TimelineMax} from 'gsap';
import Transition from 'react-transition-group/Transition';


class FadeIn extends Component {
    static defaultProps = {
        duration: 0.5,
        onEnter: () => {},
        onExit: () => {}
    };

    onEnter = (node) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node,
                this.props.duration,
                {opacity: 0},
                {opacity: 1, clearProps: 'transform, opacity'},
                0
            );

        this.props.onEnter();
    };

    onExit = (node) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node,
                this.props.duration,
                {opacity: 1},
                {opacity: 0},
                0
            )
            .call(this.props.onExit)
    };

    render() {
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


export default FadeIn;
