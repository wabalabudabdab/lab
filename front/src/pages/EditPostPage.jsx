import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updatePost } from '../redux/features/post/postSlice'

import axios from '../utils/axios'
import Editor from "../components/Editor/Editor";

export const EditPostPage = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)
        setTitle(data.title)
        setText(data.text)
    }, [params.id])

    const submitHandler = () => {
        try {
            const updatedPost = new FormData()
            updatedPost.append('title', title)
            updatedPost.append('text', text)
            updatedPost.append('id', params.id)
            dispatch(updatePost(updatedPost))
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    const clearFormHandler = () => {
        setTitle('')
        setText('')
    }

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    return (
        <form
            className='w-3/3 mx-auto py-10'
            onSubmit={(e) => e.preventDefault()}
        >

            <label className='text-xs text-white opacity-70'>
                Название письма:
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Название'
                    className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
                />
            </label>

            <label className='text-xs text-white opacity-70'>
                HTML:
                {/*<textarea*/}
                {/*    onChange={(e) => setText(e.target.value)}*/}
                {/*    value={text}*/}
                {/*    placeholder='HTML'*/}
                {/*    className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none resize-none h-60 placeholder:text-gray-700'*/}
                {/*/>*/}
                <Editor className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none resize-none h-60 placeholder:text-gray-700' placeholder='HTML' onChange={(e) => setText(e.target.value)} post = {text}/>

            </label>


            <div className='flex gap-8 items-center justify-center mt-4'>
                <button
                    onClick={submitHandler}
                    className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4'
                >
                    Обновить
                </button>

                <button
                    onClick={clearFormHandler}
                    className='flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4'
                >
                    Отменить
                </button>
            </div>
        </form>
    )
}
