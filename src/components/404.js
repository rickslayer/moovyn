import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/App.css'

export default class Page404 extends React.Component {
    render() {
        return (
            <Container>
                <Row className="text-center title-pp mt-5">
                    <Col>
                        <h1>Sorry. This page couldn't be found.</h1>
                        <h1>Error Code: 404</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}
