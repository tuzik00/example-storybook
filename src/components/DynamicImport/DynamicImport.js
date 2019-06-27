import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DynamicImport extends Component {
    static propTypes = {
        load: PropTypes.func,
        children: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            component: null,
        };
    }

    componentDidMount() {
        this._isMounted = true;

        this.props.load()
            .then((component) => {
                if (this._isMounted) {
                    this.setState({
                        component: component.default ? component.default : component,
                    });
                }
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return this.props.children(this.state.component);
    }
}


export default DynamicImport;
