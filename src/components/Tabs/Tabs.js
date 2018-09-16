// @flow

import React, {Component} from 'react';
import cn from 'classnames';

import DefaultTabBar from './DefaultTabBar';
import style from './Tabs.styl';


type PropsType = {
    children: React.Node,
    className?: string,
    onChangeTab?: string,
    renderTabBar?: string,
    initialTab?: number
};


class Tabs extends Component<PropsType> {
    static defaultProps = {
        initialTab: 0,
        onChangeTab: () => {}
    };

    constructor(props: object) {
        super(props);

        this.state = {
            activeIndex: this.props.initialTab
        };
    }

    getChildren(children: React.Children = this.props.children): React.Children {
        return React.Children.map(children, (child: React.Children): React.Children => child);
    }


    goToTab = (activeIndex: number) => {
        this.setState({
            activeIndex
        });
    };

    renderTabBar(tabBarOptions: object): React.Element {
        if (this.props.renderTabBar == false){
            return null;
        }

        if (this.props.renderTabBar) {
            return this.props.renderTabBar(tabBarOptions)
        }

        return <DefaultTabBar {...tabBarOptions} />
    }

    composeTabs(activeTab: number): React.Children{
        return this.getChildren().map((child: React.Children, index: number): React.Children => {
            if (activeTab == index){
                this.props.onChangeTab(index);

                return React.cloneElement(child, {
                    key: index
                });
            }

            return null;
        });
    }

    render(): React.Element<'div'> {
        const { activeIndex } = this.state;
        const { className } = this.props;

        const tabBarOptions = {
            activeIndex,
            headings: this.getChildren().map((child: React.Children): React.Node => child.props.heading),
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
