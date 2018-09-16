// @flow

import React, {PureComponent} from 'react';
import cn from 'classnames';

import style from './DefaultTabBar.styl';


type PropsType = {
    activeIndex: number,
    headings: array,
    goToTab: func
};


class DefaultTabBar extends PureComponent<PropsType> {
    constructor(props: object) {
        super(props);

        this.state = {
            activeIndex: this.props.activeIndex,
            lineLeft: 0,
            lineWidth: 0
        };
    }

    setActiveTab(index: number) {
        this.setState({
            activeIndex: index
        }, (): void => this.props.goToTab(index));
    }

    setLineStyle = (el: HTMLElement) => {
        if (el) {
            this.setState({
                lineWidth: `${el.clientWidth}px`,
                lineLeft: `${el.offsetLeft}px`
            });
        }
    };

    renderHeading(): array {
        const {headings, activeIndex} = this.props;

        return headings.map((heading: string | React.Element, index: number): React.Element<'div'> => {
            const hasActive = index == activeIndex;

            return (
                <div
                    key={index}
                    ref={this.setLineStyle}
                    onClick={(): void => this.setActiveTab(index)}
                    className={cn(style.tab_bar_item, hasActive && style.active)}
                >
                    {heading}
                </div>
            );
        });
    }

    render(): React.Element<'div'> {
        const lineStyle = {
            left: this.state.lineLeft,
            width: this.state.lineWidth
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
