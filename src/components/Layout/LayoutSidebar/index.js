import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash';
import cn from 'classnames';
import {CSSTransition} from 'react-transition-group';

import {
    isMobile
} from '../../../utils';

import {
    NavButton,
    Overlay,
} from '../../..';

import './LayoutSidebar.styl';


class LayoutSidebar extends Component {
    static propTypes = {
        isFixed: PropTypes.bool,
        isActive: PropTypes.bool,
        onClose: PropTypes.func,
        children: PropTypes.node,
    };

    static defaultProps = {
        isFixed: false,
        isActive: false,
        onClose: () => {},
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: props.isActive,
            isFixed: props.isFixed,
            isMobile: isMobile(),
        };

        this.LayoutSidebarRef = React.createRef();

        this.handleToggleLayoutSidebar = _.debounce(this.handleToggleLayoutSidebar, 100);
        this.handleWindowSizeChange = _.debounce(this.handleWindowSizeChange, 200);
    }

    componentDidMount() {
        this.LayoutSidebarRef.current.addEventListener('mouseenter', this.handleToggleLayoutSidebar);
        this.LayoutSidebarRef.current.addEventListener('mouseleave', this.handleToggleLayoutSidebar);

        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        this.LayoutSidebarRef.current.removeEventListener('mouseenter', this.handleToggleLayoutSidebar);
        this.LayoutSidebarRef.current.removeEventListener('mouseleave', this.handleToggleLayoutSidebar);

        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isActive !== prevProps.isActive) {
            this.setState({
                isActive: this.props.isActive,
            })
        }

        if (this.state.isMobile && this.state.isFixed){
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
        } = this.props;

        const {
            isActive,
            isFixed,
            isMobile,
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
                    className={cn('LayoutSidebar', isActive && 'LayoutSidebar_open')}
                    ref={this.LayoutSidebarRef}
                >
                    <div className={'LayoutSidebar__header'}>
                        <div>Logo</div>

                        <CSSTransition
                            in={isActive}
                            timeout={200}
                            unmountOnExit
                            classNames={{
                                enterActive: 'LayoutSidebar__toggler_show',
                                enterDone: 'LayoutSidebar__toggler_show',
                            }}
                        >
                            <NavButton
                                className={cn('LayoutSidebar__toggler', isActive && 'LayoutSidebar__toggler_show')}
                                isActive={isFixed}
                                onClick={() => this.setState({isFixed: !isFixed})}
                            />
                        </CSSTransition>
                    </div>
                    {children}
                </aside>
            </Fragment>
        );
    }
}


export default LayoutSidebar;
