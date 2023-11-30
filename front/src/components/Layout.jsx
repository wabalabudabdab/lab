import React from 'react'
import { Navbar } from './Navbar'
import {Link} from "react-router-dom";

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='bg-white'
            >
                {/*<Navbar />*/}
                <div className='w-full h-20 bg-white'>
                    <div className='max-w-screen-xl h-20 flex justify-end items-center mx-auto'>
                        <Link
                            to='/new'
                            className='flex justify-end items-center text-xl text-black mr-4'
                        >
                            Стать бадди
                        </Link>
                    </div>
                </div>

                {children}
            </div>
        </React.Fragment>
    )
}
