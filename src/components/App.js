import React from 'react'
import {Helmet} from 'react-helmet'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Container from 'react-bootstrap/Container';


export default class App extends React.Component {
    render() {
        return  (
            <div>
          
            <Container>
                <Helmet>
                    <style>{'body {background-color: #1e6c93 }'}</style>
                </Helmet>
                <Content/>
                <Team/>
            </Container>
            <Footer/>
            </div>
        )
    }
}