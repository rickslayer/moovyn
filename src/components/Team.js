import React from 'react'
import '../styles/App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {Spring} from 'react-spring/renderprops'

export default class Team extends React.Component {
    render() {
        return (
            <Spring
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay: 1000, duration:1000}}

            >
                {props => (

                <Row style={props} className="text-center mt-5 mb-5" id="team">
                    <Col md={12} >
                       <h1 style={{textTransform:'uppercase',color:'#cacaca'}}> Team </h1>
                    </Col>
                    <Col lg={6} className="mt-5 mb-5">
                         <Image src="/img/pablo.PNG" style={{width:'250px', textAlign:'center'}} />
                         <h2 style={{color:'#cacaca'}}>Pablo Kamien</h2>
                         <a className="links" href="mailto:pablo@moovyn.app">pablo@moovyn.app</a>
                    </Col>
                    <Col lg={6} className="mt-5 mb-5">
                        <Image src="/img/nicolas.PNG" style={{width:'250px', textAlign:'center'}} />
                         <h2 style={{color:'#cacaca'}}>Nicolas Kamien</h2>
                         <a className="links" href="mailto:nicolas@moovyn.app">nicolas@moovyn.app</a>
                    </Col>
                </Row>

                )}
            </Spring>
        )
    }
}