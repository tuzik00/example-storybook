import React, {PureComponent} from 'react'

import {
    Sidebar,
    Button,
    Container
} from '../../../src';


class SidebarWithContentDecorator extends PureComponent {
    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({isOpen: true})}>Открыть</Button>
                <Sidebar
                    open={this.state.isOpen}
                    onClose={() => this.setState({isOpen: false})}
                >
                    <div className="story-container">
                        <ul className="story-list">
                            <li>
                                <Button block>default</Button>
                            </li>
                            <li>
                                <Button block primary>primary</Button>
                            </li>
                            <li>
                                <Button block success>success</Button>
                            </li>
                            <li>
                                <Button block info>info</Button>
                            </li>
                            <li>
                                <Button block danger>danger</Button>
                            </li>
                            <li>
                                <Button block warning>warning</Button>
                            </li>
                        </ul>
                    </div>
                </Sidebar>
            </div>
        );
    }
}

export default SidebarWithContentDecorator;
