import React from 'react'
import '../styles/App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Spring} from 'react-spring/renderprops'
export default class Footer extends React.Component {
    render() {
        
        return  (
            <Spring
                from={{opacity:0}}
                to={{opacity:1}}
                config={{delay: 1500, duration:1000}}
            >
                {props => (
                    <Row className="text-center mt-5 footer" style={props}>
                        <Col className="pt-3">
                            <a className="links" href="mailto:contact@moovyn.app">contact@moovyn.app</a>
                        </Col>
                    </Row>
                )}
            </Spring>
           
        )
    }
}