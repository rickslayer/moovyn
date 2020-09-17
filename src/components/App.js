import React from 'react'
import {Helmet} from 'react-helmet'

export default class App extends React.Component {
    render() {
        return  (
            <div>
            <Helmet>
                <style>{'body {background-color: #1e6c93 }'}</style>
            </Helmet>

            </div>
        )
    }
}