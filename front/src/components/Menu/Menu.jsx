import React from 'react';
import './Menu.css';
import {PostItem} from "../PostItem";
import {Link} from "react-router-dom";

const Menu = ({header, posts, active, setActive}) => {
    return (
        <div>
            <div className={active ? 'menu active' : 'menu'} onClick={()=> setActive(false)}>
                <div className='blurr'>
                    <div className='menu__content' onClick={e => e.stopPropagation()}>
                        <div className='menu__header'>
                            {/*{header}*/}
                        </div>
                        <ul>
                            <div className='flex justify-between gap-8'>
                                <div className='flex flex-col gap-10 basis-4/5'>
                                    <br/>
                                    {posts?.map((post, idx) => (
                                        <Link className='text-white' to={`/${post._id}/edit`}>
    <div>
        {post.title}
    </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Menu;