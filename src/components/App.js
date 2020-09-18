import React from 'react'
import {Helmet} from 'react-helmet'
import '../styles/App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

export default class App extends React.Component {
    render() {
        return  (
            <Container fluid="md">
            <Helmet>
                <style>{'body {background-color: #1e6c93 }'}</style>
            </Helmet>
                <Row>
                    <Col>
                    <Image src="img/logo-moovyn.PNG" fluid></Image>
                    </Col>
               </Row>
            </Container>
        )
    }
}