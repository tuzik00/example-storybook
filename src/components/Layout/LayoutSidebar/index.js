import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';
import {CSSTransition} from 'react-transition-group';

import {
    Overlay,
    IconButton,
} from '../../..';

import { PushPin } from '../../../assets/icons';

import './LayoutSidebar.styl';


class LayoutSidebar extends Component {
    static propTypes = {
        isFixed: PropTypes.bool,
        isActive: PropTypes.bool,
        onClose: PropTypes.func,
        onOpen: PropTypes.func,
        children: PropTypes.func,
        dark: PropTypes.bool,
        isMobile: PropTypes.bool,
    };

    static defaultProps = {
        isFixed: false,
        isActive: false,
        isMobile: false,
        onOpen: () => {},
        onClose: () => {},
        dark: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: props.isActive,
            isFixed: props.isActive,
            isMount: !props.isMobile,
        };

        this.layoutSidebarRef = React.createRef();

        this.handleToggleLayoutSidebar = _.debounce(this.handleToggleLayoutSidebar, 100);
    }

    componentDidMount() {
        this.layoutSidebarRef.current.addEventListener('mouseenter', this.handleToggleLayoutSidebar);
        this.layoutSidebarRef.current.addEventListener('mouseleave', this.handleToggleLayoutSidebar);

        setTimeout(() => this.setState({ isMount: true }), 0);
    }

    componentWillUnmount() {
        this.layoutSidebarRef.current.removeEventListener('mouseenter', this.handleToggleLayoutSidebar);
        this.layoutSidebarRef.current.removeEventListener('mouseleave', this.handleToggleLayoutSidebar);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isActive !== prevProps.isActive) {
            this.setState({
                isActive: this.props.isActive,
                isMount: true,
            })
        }

        if (this.props.isMobile && this.state.isFixed) {
            this.setState({
                isFixed: false,
            })
        }

        if (this.props.isActive){
            this.props.onOpen();
        } else {
            this.props.onClose();
        }
    }

    handleToggleLayoutSidebar = (e) => {
        if (this.state.isFixed || this.props.isMobile) {
            return;
        }

        const isActive = e.type === 'mouseenter';

        this.setState({
            isActive,
        })
    };

    handleClose = () => {
        this.setState({
            isActive: false,
        }, this.props.onClose);
    };

    render() {
        const {
            children,
            dark,
            isMobile,
        } = this.props;

        const {
            isActive,
            isFixed,
            isMount,
        } = this.state;

        return (
            <Fragment>
                {isMobile ? (
                    <Overlay
                        isShow={isActive}
                        onClick={this.handleClose}
                    />
                ) : null}

                <aside
                    style={{'display': !isMount ? 'none' : 'block'}}
                    className={cn(
                        'LayoutSidebar',
                        isMobile && 'LayoutSidebar_mobile',
                        isActive && 'LayoutSidebar_open',
                        dark && `LayoutSidebar_theme-dark`
                    )}
                    ref={this.layoutSidebarRef}
                >
                    <CSSTransition
                        in={isActive}
                        timeout={5000}
                        unmountOnExit
                        classNames={{
                            enterActive: 'LayoutSidebar__toggler_show',
                            enterDone: 'LayoutSidebar__toggler_show',
                        }}
                    >
                        <IconButton
                            className={cn(
                                'LayoutSidebar__toggler',
                                isMobile && 'LayoutSidebar__toggler_mobile',
                                isActive && 'LayoutSidebar__toggler_show',
                                isFixed && 'LayoutSidebar__toggler_fixed',
                            )}
                            transparent
                            onClick={() => this.setState({isFixed: !isFixed})}
                            icon={<PushPin/>}
                        />
                    </CSSTransition>
                    <div className={'LayoutSidebar__content'}>
                        {children({ isActive, isMobile, isFixed })}
                    </div>
                </aside>
            </Fragment>
        );
    }
}


export default LayoutSidebar;
