import React, {useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PopularPosts } from '../components/PopularPosts'
import { PostItem } from '../components/PostItem'
import { getAllPosts } from '../redux/features/post/postSlice'
import Editor from "../components/Editor/Editor";
import Menu from "../components/Menu/Menu";
import './layout.css'
import {Aliens, podcast, phd, Bunner, ai, Master} from './../assets'

import {Link} from "react-router-dom";

export const MainPage = () => {
    const dispatch = useDispatch()
    const [menuActive, setMenuActive] = useState(false);

    const { posts, popularPosts } = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (!posts.length) {
        return (
            <div className='text-xl text-center text-grey py-10'>
                Loading...
            </div>
        )
    }
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
            title: 'Моя докторская по статистическому анализу',
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


    return (
        <div className='flex-col align-top justify-center columns-1 max-w-screen-xl' style={{margin:'0 auto'}}>
            <div className='flex relative'>
                <img className='w-2/3 ' src = {Bunner}/>
                <img className='w-96 absolute right-20 top-2/4' style={{maxWidth:'100px'}} src = {Aliens}/>
            </div>
            <div className='flex text-s text-center text-grey py-10 flex-row gap-4 flex-wrap'>
                {/*<p>Подобрать ментора</p>*/}
                {tags?.map((elem, idx)=>(
                    <div key={idx}>
                        <button className='border-2 border-amber-900 rounded-3xl py-2 px-4'>
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
                                    <img width='140px' src={Master}/>
                                </dt>
                                {/*<dt className="text-sm font-medium leading-6 text-gray-900">About</dt>*/}
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{post.text}
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

            <div className="flex-box gap-4 justify-items-start mx-auto">
            {articles?.map((article, idx)=>(
                <div className="flex space-x-4 overflow-x-auto">
                <div key={article.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
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
                                    {/*<p className="mt-2 text-gray-500">{article.description}</p>*/}
                                    <div className="items-left text-lime-700 mt-2">
                                        {article.author}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                ))}
            </div>

        </div>
    )
}
