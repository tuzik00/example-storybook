import React from 'react';
import PropTypes from 'prop-types';

import {
    Grid,
    Row,
    Col,
} from '../../..';


const LayoutContent = (props) => {
    const {
        rightBar,
        leftBar,
        children,
    } = props;

    return (
        <Grid fluid>
            <Row>
                {leftBar ? (
                    <Col md={3}>
                        {leftBar}
                    </Col>
                ) : null}

                <Col md={leftBar ? 6 : 9}>
                    {children}
                </Col>

                {rightBar ? (
                    <Col md={3}>
                        {rightBar}
                    </Col>
                ) : null}
            </Row>
        </Grid>
    )
};

LayoutContent.propTypes = {
    rightBar: PropTypes.node,
    leftBar: PropTypes.node,
    children: PropTypes.node,
};


export default LayoutContent;