// @flow

import React, {PureComponent} from 'react'

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import Container from '../../components/Container';


class SidebarWithContentDecorator extends PureComponent {
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
