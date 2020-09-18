import React from 'react'
import '../styles/App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { RiArrowDownSLine } from 'react-icons/ri'
import {Spring} from 'react-spring/renderprops'
import { Link} from "react-scroll";

export default class Content extends React.Component {

    render() {
        return  (
            <Spring
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay: 1000, duration:1000}}
            >
                {props => (

                <Row style={props}>
                    <Col>
                        <Image src="img/logo-moovyn.png" fluid></Image>
                        <div  className="text-center text-uppercase light-blue">
                        <Link
                            style={{fontSize: "100px"}}
                           
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                        ><RiArrowDownSLine />
                        </Link>
                        </div>
                       
                    </Col>
                </Row>

                )}
            </Spring>
        )
    }
}