// @flow

import React, {PureComponent} from 'react'

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';


class SidebarWithContent extends PureComponent {
    state = {
        isOpen: false
    };

    render(): React.Element<'div'> {
        return (
            <div>
                <Button onClick={(): void => this.setState({isOpen: true})}>Открыть</Button>
                <Sidebar
                    open={this.state.isOpen}
                    onClose={(): void => this.setState({isOpen: false})}
                >
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                        <li>Link 5</li>
                    </ul>
                </Sidebar>
            </div>
        );
    }
}

export default SidebarWithContent;
