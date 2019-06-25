import React from 'react';
import PropTypes from 'prop-types';

import {
    Grid,
    Row,
    Col,
} from '../../..';


const LayoutContent = (props) => {
    const {
        sidebar,
        children,
    } = props;

    return (
        <Row>
            <Col md={9}>
                {children}
            </Col>
            <Col md={3}>
                {sidebar}
            </Col>
        </Row>
    )
};

LayoutContent.propTypes = {
    sidebar: PropTypes.node,
    children: PropTypes.node,
};


export default LayoutContent;