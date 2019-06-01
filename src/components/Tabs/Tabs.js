// @flow

import React, {Component} from 'react';
import cn from 'classnames';

import DefaultTabBar from './DefaultTabBar';
import style from './Tabs.styl';


class Tabs extends Component {
    static defaultProps = {
        initialTab: 0,
        onChangeTab: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: this.props.initialTab
        };
    }

    getChildren(children = this.props.children) {
        return React.Children.map(children, (child) => child);
    }


    goToTab = (activeIndex) => {
        this.setState({
            activeIndex
        });
    };

    renderTabBar(tabBarOptions) {
        if (this.props.renderTabBar === false){
            return null;
        }

        if (this.props.renderTabBar) {
            return this.props.renderTabBar(tabBarOptions)
        }

        return <DefaultTabBar {...tabBarOptions} />
    }

    composeTabs(activeTab){
        return this.getChildren().map((child, index) => {
            if (activeTab === index){
                this.props.onChangeTab(index);

                return React.cloneElement(child, {
                    key: index
                });
            }

            return null;
        });
    }

    render() {
        const { activeIndex } = this.state;
        const { className } = this.props;

        const tabBarOptions = {
            activeIndex,
            headings: this.getChildren().map((child) => child.props.heading),
            goToTab: this.goToTab
        };

        return (
            <div className={cn(style.tabs, className)}>
                <div className={style.tab__bar}>
                    {this.renderTabBar(tabBarOptions)}
                </div>
                <div className={style.tab__content}>
                    {this.composeTabs(activeIndex)}
                </div>
            </div>
        );
    }
}


export default Tabs;
