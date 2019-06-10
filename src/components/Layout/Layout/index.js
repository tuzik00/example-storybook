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
        isOpenSidebar,
        dark,
    } = props;

    const [isSidebarOpen, toggleSidebar] = useState(isOpenSidebar);

    return (
        <div className={cn('Layout', dark && 'Layout_theme-dark')}>
            <LayoutSidebar
                dark={dark}
                isActive={isSidebarOpen}
                onClose={() => toggleSidebar(false)}
            >
                {renderSidebar}
            </LayoutSidebar>
            <main className={'Layout__main'}>
                <LayoutNav
                    dark={dark}
                    isSidebarActive={isSidebarOpen}
                    onToggle={toggleSidebar}
                >
                    {renderNav(isSidebarOpen)}
                </LayoutNav>

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
    renderSidebar: () => {},
    renderNav: () => {},
    isOpenSidebar: false,
    dark: false,
};

export default Layout;