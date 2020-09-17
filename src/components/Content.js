import React from 'react'

export default class Content extends React.Component {
    render() {
        const myStyle = {
            backgroundImage:`url(${this.props.img})`,
            backgroundSize:'cover',
            overflow:'hidden',
            width:"100%",
            height:"500px",
            color:"red"
        }
        return  (
            <div style={myStyle} >
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}