import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MarkdownView from 'react-showdown'
import "./blog.css"

const WatchBlog = () => {
  const [md, setMd] = useState()
  let id = useParams().id

  useEffect(() => {
   fetch(`${process.env.REACT_APP_BLOGSAPI}${id}`)
      .then((blog) => blog.json())
      .then((blog) => blog.fileUrl)
      .then(fileUrl => getBlog(fileUrl))    
  },[id])

  function getBlog(fileUrl){
    fetch(fileUrl).then(blog => blog.text()).then(blog => setMd(blog))
  }

    return (
      <div id="blog">
        <MarkdownView markdown={md} />
      </div>
    )
  }

export default WatchBlog