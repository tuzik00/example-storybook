import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import LayoutSidebar from '../LayoutSidebar';
import LayoutNav from '../LayoutNav';

import './Layout.styl';


const Layout = (props) => {
    const {
        renderSidebar,
        renderNav,
        children,
        defaultOpenSidebar,
        dark,
        isMobile,
    } = props;

    const [isOpenSidebar, toggleSidebar] = useState(
        isMobile && defaultOpenSidebar
            ? false
            : defaultOpenSidebar
    );

    return (
        <div className={cn('Layout', dark && 'Layout_theme-dark')}>
            {typeof renderSidebar === 'function' ? (
                <LayoutSidebar
                    dark={dark}
                    isActive={isOpenSidebar}
                    isMobile={isMobile}
                    onToggle={(isOpen) => toggleSidebar(isOpen)}
                >
                    {renderSidebar}
                </LayoutSidebar>
            ) : null}
            <main className={cn('Layout__main')}>
                {typeof renderNav === 'function' ? (
                    <LayoutNav
                        dark={dark}
                        isMobile={isMobile}
                        isSidebarActive={isOpenSidebar}
                        onToggle={toggleSidebar}
                    >
                        {renderNav({ isOpenSidebar, isMobile })}
                    </LayoutNav>
                ) : null}

                <section className={'Layout__content'}>
                    {children}
                </section>
            </main>
        </div>
    )
};

Layout.propTypes = {
    renderSidebar: PropTypes.func,
    renderNav: PropTypes.func,
    children: PropTypes.node,
    isOpenSidebar: PropTypes.bool,
    dark: PropTypes.bool,
    isMobile: PropTypes.bool,
};

Layout.defaultProps = {
    isOpenSidebar: false,
    dark: false,
    isMobile: false,
};

export default Layout;