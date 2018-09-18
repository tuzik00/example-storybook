// @flow

import React, {PureComponent} from 'react'

import style from './Sidebar.styl';


type PropsType = {
    children: React.Node
};


class Sidebar extends PureComponent<PropsType> {
    render(): React.Element<'div'> {
        const {children} = this.props;

        return (
            <div className={style.sidebar}>
                {children}
            </div>
        );
    }
}

export default Sidebar;
