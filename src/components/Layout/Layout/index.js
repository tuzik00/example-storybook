import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {
    LayoutSidebar,
    LayoutNav,
} from '../../..';

import './Layout.styl';


const Layout = (props) => {
    const {
        sidebar,
        children,
        nav,
    } = props;

    const [isSidebarOpen, toggleSidebar] = useState(false);

    return (
        <div className={'Layout'}>
            <LayoutSidebar
                isActive={isSidebarOpen}
                onClose={() => toggleSidebar(false)}
            >
                {sidebar}
            </LayoutSidebar>
            <main className={'Layout__main'}>
                <LayoutNav
                    isSidebarActive={isSidebarOpen}
                    onToggle={toggleSidebar}
                >
                    {nav}
                </LayoutNav>

                <section className={'Layout__content'}>
                    {children}
                </section>
            </main>
        </div>
    )
};

Layout.propTypes = {
    sidebar: PropTypes.node,
    children: PropTypes.node,
    nav: PropTypes.node,
};

Layout.defaultProps = {};

export default Layout;