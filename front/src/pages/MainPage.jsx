import React, {useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PopularPosts } from '../components/PopularPosts'
import { PostItem } from '../components/PostItem'
import { getAllPosts } from '../redux/features/post/postSlice'
import Editor from "../components/Editor/Editor";
import Menu from "../components/Menu/Menu";
import './layout.css'
import {Aliens, cat, podcast, phd, bg, ai, Master, logo} from './../assets'
import {mockposts} from '../redux/posts.js'
import {Link} from "react-router-dom";

export const MainPage = () => {
    const dispatch = useDispatch()
    const [menuActive, setMenuActive] = useState(false);

    const { posts, popularPosts } = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])
    const tags = ['Frontend', 'Backend', 'DevOps', 'Management', 'Scrum', 'Софты', 'Анализ данных', 'Мемология', 'Хобби и увлечения']


    const articles = [
        // Здесь ваш массив данных статей
        {
            id: 1,
            category: 'Маркетинг',
            title: 'Ссылка на подкаст который я веду на яндекс музыке',
            link: 'Ссыль тут',
            author: 'Артем',
            date: '23.10.2023',
            image: podcast,
        },
        {
            id: 2,
            category: 'AI Bot',
            title: 'Бот Алекс на основе GPT-turbo',
            link: 'Инструмент для аналитики',
            author: 'Саша',
            date: '15.11.2023',
            image: ai,
        },
        {
            id: 2,
            category: 'PHD',
            title: 'Докторская работа по статистическому анализу',
            link: '',
            author: 'Лия',
            date: '16.11.2023',
            image: phd,
        },
        // Добавьте больше статей по аналогии
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (!posts.length) {
        const mockPosts = mockposts
        return (
            <div className='pt-3.5 flex-col align-top justify-center columns-1 max-w-screen-xl' style={{margin:'0 auto'}}>
                <div className='flex relative'>
                    {/*<img className='w-full' src = {bg}/>*/}
                    {/*<img className='w-10/12 absolute left-20 top-1/4' src = {logo}/>*/}
                    {/*<img className='w-96 absolute right-20 top-2/4' style={{maxWidth:'100px'}} src = {Aliens}/>*/}
                </div>
                <div className='relative bg-white p-4'>
                    <div className='flex text-sm text-center text-black gap-4 flex-wrap'>
                        {tags?.map((elem, idx) => (
                            <div key={idx}>
                                <button className='border border-black rounded-full py-2 px-4'>
                                    <span>{elem}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {mockPosts?.map((post, idx) => (
                    <div key={idx} className="mt-6 border-2 border-b-gray-300 pb-4 rounded-lg shadow-lg relative bg-gray-100">
                        <div className="h-12 bg-gray-200 rounded-t-lg"></div>

                        <div className="pt-2 mt-6 max-w-screen-xl">
                            <dl className="divide-y divide-gray-200">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dd className="py-4 px-6 mt-1 text-xl">{post.title}</dd>
                                </div>

                                <div className="py-4 px-6 flex flex-col sm:flex-row items-start">
                                    <img
                                        className="rounded-full w-48 h-48 min-w-200 object-cover mr-6 mb-4 sm:mb-0"
                                        src={cat}
                                        alt="Master"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-sm leading-6 text-gray-700">{post.text}</p>
                                        <button className="border-b-green-500 rounded bg-emerald-400 py-2 px-4 mt-4 text-white shadow-md max-w-xs ">
                                            <Link className="max-w-xs" to={`/${post._id}`}>Перейти в профиль</Link>
                                        </button>
                                    </div>
                                </div>
                            </dl>
                        </div>
                    </div>


                ))}

                <div className="flex-box flex-wrap gap-4 justify-items-start mx-auto">
                    {articles?.map((article, idx) => (
                        <div className="max-w-md w-full sm:w-200 bg-white rounded-xl shadow-md overflow-hidden" key={article.id}>
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-48 w-full object-cover md:w-48" src={article.image} alt="Article Image" />
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        {article.category}
                                    </div>
                                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                        {article.title}
                                    </a>
                                    <div className="text-black mt-2">
                                        {article.author}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>

        )
    }


    return (
        <div className='flex-col align-top justify-center columns-1 max-w-screen-xl bg-slate-800' style={{margin:'0 auto'}} >
            <div className='flex relative'>
                <img className='w-full' src = {bg}/>
                <img className='w-96 absolute left-20 top-1/4' style={{maxWidth:'400px'}} src = {logo}/>
                {/*<img className='w-96 absolute right-20 top-2/4' style={{maxWidth:'100px'}} src = {Aliens}/>*/}
            </div>
            <div className='flex text-s text-center text-white py-10 flex-row gap-4 flex-wrap'>
                {/*<p>Подобрать ментора</p>*/}
                {tags?.map((elem, idx)=>(
                    <div key={idx}>
                        <button className='bg-emerald-400 rounded-3xl py-2 px-4'>
                            <span>{elem}</span>
                        </button>
                    </div>
                ))}
            </div>
            {posts?.map((post, idx) => (
                <div key={idx} className="mt-6 border-2 border-b-gray-300 pb-4 ">
                    <div className="pt-2 mt-6 max-w-screen-xl">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dd className="mt-1 text-xl">{post.title}
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="divide-y divide-gray-100">
                                    <img width='200px' src={Master}/>
                                </dt>
                                {/*<dt className="text-sm font-medium leading-6 text-gray-900">About</dt>*/}
                                <dd className="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">{post.text}
                                </dd>
                            </div>

                        </dl>
                    </div>
                    <button className='border-2 border-amber-900 rounded-3xl bg-amber-900 py-4 px-6'>
                        <Link className='text-white ' to={`/${post._id}`}>Перейти в профиль</Link>
                    </button>

                </div>

            ))}

            <div className='pt-20 text-xl'>
                Публикации/Ссылки на медиа/Инструменты:
            </div>

            <div className="flex-box flex-wrap gap-4 justify-items-start mx-auto">
                {articles?.map((article, idx) => (
                    <div className="max-w-md w-full sm:w-200 bg-white rounded-xl shadow-md overflow-hidden" key={article.id}>
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48" src={article.image} alt="Article Image" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                    {article.category}
                                </div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                    {article.title}
                                </a>
                                <div className="text-black mt-2">
                                    {article.author}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}
