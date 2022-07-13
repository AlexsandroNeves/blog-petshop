import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { busca } from '../api/api'

import '../assets/css/post.css'
const Post = () => {
    const [post, setPosts] = useState({})
    const {  } = useParams()
    useEffect(() => {
        busca(`/post/${id}`, setPosts)
    }, [])

    return (

        <main className="container flex flex--centro">
            <article className='cartao post'>
                <h2 className='cartao__titulo'>{post.title}</h2>
                <p className='cartao__texto'> {post.body}</p>
            </article>

        </main>
    )

}

export default Post