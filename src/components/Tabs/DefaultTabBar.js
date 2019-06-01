import React, {PureComponent} from 'react';
import cn from 'classnames';

import style from './DefaultTabBar.styl';


class DefaultTabBar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: this.props.activeIndex,
            lineLeft: 0,
            lineWidth: 0,
            opacity: 0
        };

        this.$labels = [];
    }

    componentDidMount() {
        this.setLineStyle(this.getCurrentTabElement());

        window.addEventListener('load', () => {
            this.setLineStyle(this.getCurrentTabElement());
        });
    }

    componentWillUnmount() {
        window.removeEventListener('load', () => {
            this.setLineStyle(this.getCurrentTabElement());
        }, false);
    }

    getCurrentTabElement() {
        return this.$labels[this.state.activeIndex];
    }

    setActiveTab(index) {
        this.setState({
            activeIndex: index
        }, () => {
            this.setLineStyle(this.$labels[index]);
            this.props.goToTab(index);
        });
    }

    setLineStyle = (el) => {
        if (!el) {
            return;
        }

        this.setState({
            lineWidth: `${el.clientWidth}px`,
            lineLeft: `${el.offsetLeft}px`
        }, () => {
            setTimeout(() => this.setState({opacity: 1}), 500)
        });
    };

    renderHeading() {
        const {headings, activeIndex} = this.props;

        return headings.map((heading, index) => {
            const classNames = cn(
                style.tab_bar_item,
                index === activeIndex && style.active
            );

            return (
                <div
                    key={index}
                    ref={(el) => this.$labels.push(el)}
                    onClick={() => this.setActiveTab(index)}
                    className={classNames}
                >
                    {heading}
                </div>
            );
        });
    }

    render() {
        const lineStyle = {
            left: this.state.lineLeft,
            width: this.state.lineWidth,
            opacity: this.state.opacity
        };

        return (
            <div className={style.tab_bar}>
                <div
                    style={lineStyle}
                    className={style.line}
                />
                {this.renderHeading()}
            </div>
        );
    };
}


export default DefaultTabBar;
