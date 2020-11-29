import React, { useState, useEffect } from "react";
import useTitle from '../hooks/useTitle';
import useDescription from '../hooks/useDescription';
import { useParams } from "react-router-dom";
import MarkdownView from 'react-showdown';
import "./blog.css"

const WatchBlog = () => {
  const [md, setMd] = useState()
  const [title, setTitle] = useState('Loading...')
  const [description, setDescription] = useState('Loading...')
  useTitle({title});
  useDescription({description});

  let id = useParams().id

  useEffect(() => {
   fetch(`${process.env.REACT_APP_BLOGSAPI}${id}`)
      .then((blog) => blog.json())
      .then((blog) => blog)
      .then(file => {
        setTitle(file.title);
        setDescription(file.content);
        getBlog(file.fileUrl);
      })    
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