import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='' style={{backgroundColor:"#15171E"}}>
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}
