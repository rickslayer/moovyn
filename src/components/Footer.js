import React from 'react'
import '../styles/App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Footer extends React.Component {
    render() {
        const footer = {
            "backgroundColor": "#c2c2c2",
            "textDecoration": "none",
            "height": '50px',
            "color": 'black',
        }
        return  (
            <Row className="text-center mt-5" style={footer}>
                <Col className="pt-3">
                    <a className="links" href="mailto:contact@moovyn.app">contact@moovyn.app</a>
                </Col>
            </Row>
        )
    }
}