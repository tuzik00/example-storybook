import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './ButtonsTabBar.styl';

import {
    Button,
} from '../../../'


class ButtonsTabBar extends PureComponent {
    static propTypes = {
        activeIndex: PropTypes.number,
        headings: PropTypes.node,
        goToTab: PropTypes.func,
    };

    renderHeading() {
        const {
            headings,
            activeIndex,
            goToTab,
        } = this.props;

        return headings.map((heading, index) => {
            const isActive = index === activeIndex;

            const classNames = cn(
                'ButtonsTabBar__item',
            );

            return (
                <Button
                    key={index}
                    bordered={!isActive}
                    color={'primary'}
                    onClick={() => goToTab(index)}
                    className={classNames}
                >
                    {heading}
                </Button>
            );
        });
    }

    render() {
        return (
            <div className={'ButtonsTabBar'}>
                {this.renderHeading()}
            </div>
        );
    };
}


export default ButtonsTabBar;
