import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';
import {CSSTransition} from 'react-transition-group';

import {
    isMobile
} from '../../../utils';

import {
    Overlay,
    IconButton,
} from '../../..';

import './LayoutSidebar.styl';


class LayoutSidebar extends Component {
    static propTypes = {
        isFixed: PropTypes.bool,
        isActive: PropTypes.bool,
        onClose: PropTypes.func,
        children: PropTypes.func,
        logo: PropTypes.node,
        dark: PropTypes.bool,
    };

    static defaultProps = {
        isFixed: false,
        isActive: false,
        onClose: () => {},
        dark: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: props.isActive,
            isFixed: props.isActive,
            isMobile: isMobile(),
            isMount: !isMobile(),
        };

        this.layoutSidebarRef = React.createRef();

        this.handleToggleLayoutSidebar = _.debounce(this.handleToggleLayoutSidebar, 100);
        this.handleWindowSizeChange = _.debounce(this.handleWindowSizeChange, 100);
    }

    componentDidMount() {
        this.layoutSidebarRef.current.addEventListener('mouseenter', this.handleToggleLayoutSidebar);
        this.layoutSidebarRef.current.addEventListener('mouseleave', this.handleToggleLayoutSidebar);

        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        this.layoutSidebarRef.current.removeEventListener('mouseenter', this.handleToggleLayoutSidebar);
        this.layoutSidebarRef.current.removeEventListener('mouseleave', this.handleToggleLayoutSidebar);

        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isActive !== prevProps.isActive) {
            this.setState({
                isActive: this.props.isActive,
                isMount: true,
            })
        }

        if (this.state.isMobile && this.state.isFixed) {
            this.setState({
                isFixed: false,
            })
        }
    }

    handleToggleLayoutSidebar = (e) => {
        if (this.state.isFixed) {
            return;
        }

        this.setState({
            isActive: e.type === 'mouseenter',
        })
    };

    handleWindowSizeChange = () => {
        this.setState({
            isMobile: isMobile(),
        });
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
        } = this.props;

        const {
            isActive,
            isFixed,
            isMobile,
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
                        isActive && 'LayoutSidebar_open',
                        dark && `LayoutSidebar_theme-dark`
                    )}
                    ref={this.layoutSidebarRef}
                >
                    <CSSTransition
                        in={isActive}
                        timeout={200}
                        unmountOnExit
                        classNames={{
                            enterActive: 'LayoutSidebar__toggler_show',
                            enterDone: 'LayoutSidebar__toggler_show',
                        }}
                    >
                        <IconButton
                            className={cn('LayoutSidebar__toggler', isActive && 'LayoutSidebar__toggler_show')}
                            transparent={isFixed}
                            onClick={() => this.setState({isFixed: !isFixed})}
                            name={'PushPin'}
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
