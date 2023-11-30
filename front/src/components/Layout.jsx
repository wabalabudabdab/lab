import React from 'react'
import { Navbar } from './Navbar'
import {Link} from "react-router-dom";
import {logo} from "../assets";

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='bg-white'
            >
                {/*<Navbar />*/}
                <div className='w-full h-20 bg-black '>
                    <div className=' mx-auto  max-w-screen-xl flex justify-between'>
                        <div className='h-20 flex justify-end items-center ' >
                            <img className='h-10' src = {logo}/>
                        </div>
                        <div className='h-20 flex justify-end items-center '>
                            <Link
                                to='/new'
                                className='text-xl text-white mr-4'
                            >
                                Стать бадди
                            </Link>
                        </div>
                    </div>

                </div>

                {children}
            </div>
        </React.Fragment>
    )
}
