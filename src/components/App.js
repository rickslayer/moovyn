import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Container from 'react-bootstrap/Container';
import '../styles.css'


export default class App extends React.Component {
    render() {
        return  (
            <div>
            <Container>
                <Content/>
                <Team/>
            </Container>
            <Footer/>
            </div>
        )
    }
}