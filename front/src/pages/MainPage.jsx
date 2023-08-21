import React, {useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../redux/features/post/postSlice'
import './layout.css'

export const MainPage = () => {
    const dispatch = useDispatch()
    const [menuActive, setMenuActive] = useState(false);
    const { posts, popularPosts } = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (!posts.length) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Темплейтов нет.
            </div>
        )
    }

    return (
        <div className='mx-auto py-10'>

        </div>
    )
}
