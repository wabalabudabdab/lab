import React, {useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PopularPosts } from '../components/PopularPosts'
import { PostItem } from '../components/PostItem'
import { getAllPosts } from '../redux/features/post/postSlice'
import Editor from "../components/Editor/Editor";
import Menu from "../components/Menu/Menu";
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
                Постов не существует.
            </div>
        )
    }

    return (
        <div className='mx-auto py-10'>

        </div>
    )
}
