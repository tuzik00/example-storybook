import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TimelineMax} from 'gsap';
import Transition from 'react-transition-group/Transition';


class SlideTop extends Component {
    static propTypes = {
        duration: PropTypes.number,
        onExit: PropTypes.func,
        onEnter: PropTypes.func,
        index: PropTypes.number,
    };

    static defaultProps = {
        onEnter: () => {},
        onExit: () => {},
        duration: 300,
        index: 1,
    };

    state = {
        isMount: false,
    };

    componentDidMount() {
        const {
            index,
            duration,
        } = this.props;

        this.setState({
            isMount: true,
            duration: duration + (100 * index),
        });
    }

    onEnter = (node) => {
        const timeLine = new TimelineMax();

        timeLine
            .fromTo(
                node,
                this.state.duration / 1000,
                {x: 0, y: -10, itemOrigin: "0% 0%"},
                {x: 0, y: 0, itemOrigin: "0% 0%"},
                0
            );

        this.props.onEnter();
    };

    render() {
        const {
            children,
        } = this.props;

        const {
            duration,
        } = this.state;

        return (
            <Transition
                in={this.state.isMount}
                timeout={duration}
                onEnter={this.onEnter}
            >
                {children}
            </Transition>
        );
    }
}


export default SlideTop;