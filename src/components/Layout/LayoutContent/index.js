import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './LayoutContent.styl';


const LayoutContent = (props) => {
    const {
        rightBar,
        leftBar,
        children,
        header,
        dark,
    } = props;

    const classNames = cn(
        'LayoutContent',
        dark && 'LayoutContent_theme-dark'
    );

    return (
        <div className={classNames}>
            <div className={'LayoutContent__header'}>
                {header}
            </div>
            <div className={'LayoutContent__container'}>
                {leftBar ? (
                    <div className={'LayoutContent__leftbar'}>
                        {leftBar}
                    </div>
                ) : null}

                <div className={'LayoutContent__content'}>
                    {children}
                </div>

                {rightBar ? (
                    <div className={'LayoutContent__rightbar'}>
                        {rightBar}
                    </div>
                ) : null}
            </div>
        </div>
    )
};

LayoutContent.propTypes = {
    rightBar: PropTypes.node,
    leftBar: PropTypes.node,
    children: PropTypes.node,
    dark: PropTypes.bool,
};


export default LayoutContent;