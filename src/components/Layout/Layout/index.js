import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { isMobile } from '../../../utils';

import LayoutSidebar from '../LayoutSidebar';
import LayoutNav from '../LayoutNav';

import './Layout.styl';


const Layout = (props) => {
    const {
        renderSidebar,
        renderNav,
        children,
        isOpenSidebar,
        dark,
    } = props;

    const isOpen = isMobile() && isOpenSidebar ? false : isOpenSidebar;
    const [isSidebarOpen, toggleSidebar] = useState(isOpen);

    return (
        <div className={cn('Layout', dark && 'Layout_theme-dark')}>
            {typeof renderSidebar === 'function' ? (
                <LayoutSidebar
                    dark={dark}
                    isActive={isSidebarOpen}
                    onClose={() => toggleSidebar(false)}
                >
                    {renderSidebar}
                </LayoutSidebar>
            ) : null}
            <main className={'Layout__main'}>
                {typeof renderNav === 'function' ? (
                    <LayoutNav
                        dark={dark}
                        isSidebarActive={isSidebarOpen}
                        onToggle={toggleSidebar}
                    >
                        {renderNav(isSidebarOpen)}
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
};

Layout.defaultProps = {
    isOpenSidebar: false,
    dark: false,
};

export default Layout;