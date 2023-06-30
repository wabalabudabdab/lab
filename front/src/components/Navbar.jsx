import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import Menu from "./Menu/Menu";
import {getAllPosts} from "../redux/features/post/postSlice";

export const Navbar = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const activeStyles = {
        color: 'white',
    }

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    const { posts, PopularPosts } = useSelector((state) => state.post)



    return (
        <div className='flex py-4 justify-between items-center'>
            {isAuth && (
                <div className='flex'>
                    <div className="burger-btn" onClick={()=>setMenuActive(!menuActive)}>
                        <span/>
                    </div>

                    <Menu active={menuActive} setActive={setMenuActive} header={"Mails"} posts={posts}/>
                   {/*<NavLink*/}
                   {/*         to={'/'}*/}
                   {/*         href='/'*/}
                   {/*         className='text-xs text-gray-400 hover:text-white'*/}
                   {/*         style={({ isActive }) =>*/}
                   {/*             isActive ? activeStyles : undefined*/}
                   {/*         }*/}
                   {/*     >*/}
                   {/*         Главная*/}
                   {/*     </NavLink>*/}

                    {/*<li>*/}
                    {/*    <NavLink*/}
                    {/*        to={'/posts'}*/}
                    {/*        href='/'*/}
                    {/*        className='text-xs text-gray-400 hover:text-white'*/}
                    {/*        style={({ isActive }) =>*/}
                    {/*            isActive ? activeStyles : undefined*/}
                    {/*        }*/}
                    {/*    >*/}
                    {/*        Мои посты*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink*/}
                    {/*        to={'/new'}*/}
                    {/*        href='/'*/}
                    {/*        className='text-xs text-gray-400 hover:text-white'*/}
                    {/*        style={({ isActive }) =>*/}
                    {/*            isActive ? activeStyles : undefined*/}
                    {/*        }*/}
                    {/*    >*/}
                    {/*        Добавить пост*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                </div>
            )}

            <div className='flex justify-center items-center bg-gray-600 text-xs rounded-sm px-4 py-2'>
                {isAuth ? (
                    <button onClick={logoutHandler}>Выйти</button>
                ) : (
                    <Link to={'/login'}> Войти </Link>
                )}
            </div>
        </div>
    )
}
