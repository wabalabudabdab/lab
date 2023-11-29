import React from 'react'
import { Navbar } from './Navbar'
import {Link} from "react-router-dom";

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='' style={{backgroundColor:"#F5F5F5"}}>
                {/*<Navbar />*/}
                <div className='w-full h-20 bg-black' >
                    <div className='max-w-screen-xl h-20 flex align-middle justify-end items-center'>
                        <Link
                            to='/new'
                            className='flex justify-end items-center text-s text-white'
                        >
                            Стать ментором
                        </Link>
                    </div>

                </div>
                {children}
            </div>
        </React.Fragment>
    )
}
