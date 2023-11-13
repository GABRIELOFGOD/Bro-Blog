import { useParams } from 'react-router-dom'

import BlogComp from '../components/BlogComp'

import { single, datas } from '../utils/dummy'
import { useState } from 'react'

let usefull = {}

const ReadBlog = () => {
  const { id } = useParams()

  datas.map(item => {
    if (item.id == id) {
      usefull = item
    }
  })
  
   return (
     <div>
       <BlogComp blog={usefull} />
     </div>
    )
  }
  
export default ReadBlog;