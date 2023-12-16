import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    AiFillEye,
    AiOutlineMessage,
    AiTwotoneEdit,
    AiFillDelete,
} from 'react-icons/ai'
import Moment from 'react-moment'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import axios from '../utils/axios'
import { removePost } from '../redux/features/post/postSlice'

import { CommentItem } from '../components/CommentItem'
import Editor from "./../components/Editor/Editor";
import {Aliens} from "../assets";

export const PostPage = () => {
    const [post, setPost] = useState(null)

    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const removePostHandler = () => {
        try {
            dispatch(removePost(params.id))
            toast('Пост был удален')
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)
        setPost(data)
    }, [params.id])

    useEffect(() => {
        fetchPost()
    }, [fetchPost])



    if (!post) {
        return (
            <div>
                <button className='text-grey'>
                    <Link to={'/'}>
                        Назад
                    </Link>
                </button>
            <div className='w-full text-xl text-center text-grey py-10 flex-col justify-center columns-1'>
                <p>Slaaaack connected ... </p>
                <div className='w-full text-xl text-center align-middle text-grey py-10 flex-col justify-center items-center'>
                    <img className='w-1/4 justify-center columns-1 items-center' style={{maxWidth:'100px', textAlign:'center', display: 'block', margin: '0 auto'}} src={Aliens} />
                </div>
            </div>
            </div>

        )
    }
    return (
        <div>
            <button className='text-grey'>
                <Link to={'/'}>
                    Назад
                </Link>
            </button>

            <div>
                <div className="mt-4 border-2 border-gray-100 w-2/3">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dd className="mt-1 text-sm">{post.title}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Экспертиза</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{post.text}
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className='flex gap-4'>
                    <button className='border-2 border-amber-900 rounded-3xl bg-amber-900 py-4 px-6'>
                        <Link className='text-white p-4' to={`/${post._id}`}>Написать вопрос в слак</Link>
                    </button>

                    <button className='border-2 border-amber-900 rounded-3xl bg-amber-900 py-4 px-6'>
                        <Link className='text-white p-4' to={`/${post._id}`}>Оставить запрос</Link>
                    </button>
                </div>



                {user?._id === post.author && (
                    <div className='flex gap-3 mt-4'>
                        <button className='flex items-center justify-center gap-2 text-grey opacity-50'>
                            <Link to={`/${params.id}/edit`}>
                                <AiTwotoneEdit />
                            </Link>
                        </button>
                        <button
                            onClick={removePostHandler}
                            className='flex items-center justify-center gap-2  text-grey opacity-50'
                        >
                            <AiFillDelete />
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}
