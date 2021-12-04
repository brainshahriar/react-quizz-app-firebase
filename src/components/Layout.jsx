import React, { Component } from 'react'
import Nav from './Nav'

class Layout extends Component {
    render() {
        return (
            <>
            <Nav />
            <main className={classes.main}>
                <div className="container">
                    
                </div>
            </main>
            </>
        )
    }
}

export default Layout
