import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {CSSTransition} from 'react-transition-group';
import OutsideClickHandler from 'react-outside-click-handler';

import './Dropdown.styl';


class Dropdown extends Component {
    static propTypes = {
        renderToggle: PropTypes.func,
    };

    static defaultProps = {
        renderToggle: () => {
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    renderContent() {
        const {
            isOpen,
        } = this.state;

        const {
            content,
        } = this.props;

        return (
            <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={{
                    enter: 'Dropdown__content_open',
                    enterDone: 'Dropdown__content_open_done',
                    exit: 'Dropdown__content_open',
                }}
                unmountOnExit
                mountOnEnter
            >
                <div className={cn('Dropdown__content')}>
                    {content}
                </div>
            </CSSTransition>
        )
    }

    render() {
        const {
            children,
        } = this.props;

        const className = 'Dropdown';

        const container = (children) => {
            return (
                <Fragment>
                    {children.props.children}
                    {this.renderContent()}
                </Fragment>
            )
        };

        if (typeof children === 'function') {
            const renderChild = children(this.handleToggle);

            return React.cloneElement(renderChild, {
                className,
                children: container(renderChild),
            })
        }

        if (!React.isValidElement(children)) {
            return children;
        }

        return React.cloneElement(children, {
            className,
            children: container(children),
            onClick: () => {
                const onClick = children.props.onClick;

                if (onClick) {
                    onClick();
                }

                this.handleToggle();
            },
        })
    }
}


export default Dropdown;