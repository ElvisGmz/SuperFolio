import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Loader";
// import useTitle from "../hooks/useTitle";
// import useDescription from "../hooks/useDescription";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MarkdownView from "react-showdown";

const WatchBlog = () => {
  const [Loading, setLoading] = useState(true);
  const [md, setMd] = useState();
  const [title, setTitle] = useState("Loading...");
  const [description, setDescription] = useState("Loading...");
  const [banner, setBanner] = useState("");

  let id = useParams().id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BLOGSAPI}${id}`)
      .then((blog) => blog.json())
      .then((blog) => blog)
      .then((file) => {
        setTitle(file.title);
        setDescription(file.content);
        setBanner(file.bannerUrl);
        getBlog(file.fileUrl);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  function getBlog(fileUrl) {
    fetch(fileUrl)
      .then((blog) => blog.text())
      .then((blog) => setMd(blog));
  }

  return (
    <>
      {Loading ? (
        <>
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
          <Loader />
        </>
      ) : (
        <BlogView>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
              property="og:image"
              content={banner}
            />
          </Helmet>
          <MarkdownView markdown={md} />
        </BlogView>
      )}
    </>
  );
};

export default WatchBlog;

const BlogView = styled.main`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  max-width: 768px;
  margin: 1rem auto 2.5rem;
  white-space: normal;

  p {
    line-height: 25px;
    letter-spacing: 1px;
  }

  table {
    width: 100%;
  }

  table th {
    background-color: crimson;
    color: #fff;
    margin: 0;
    text-align: left !important;
    padding: 0.5rem;
  }

  table tbody tr td {
    background-color: #f0f0f0;
    margin: 0;
    text-align: left !important;
    padding: 0.5rem;
  }

  h1 {
    font-size: 40px;
    color: #f0f0f0;
  }

  h2 {
    font-size: 34px;
    color: #f0f0f0;
  }

  h3 {
    font-size: 28px;
    color: #f0f0f0;
  }

  h4 {
    font-size: 22px;
    color: #f0f0f0;
  }

  h5 {
    font-size: 16px;
    color: #f0f0f0;
  }

  h6 {
    font-size: 10px;
    color: #f0f0f0;
  }

  blockquote {
    background-color: #21212c;
    border-left: 5px solid #00b0ff;
    color: #f0f0f0;
    padding: 1px 1rem;
    margin: 0;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    white-space: normal;
  }

  hr {
    margin: 40px 0px;
    background-color: #cecece;
    height: 0.1px;
  }

  a {
    background-color: #00b0ff;
    color: #fff;
    text-decoration: none;
    padding: 2px 5px;
    margin-top: 12px;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
  }

  a:hover {
    background-color: #0099e0;
  }

  ul li {
    margin-top: 12px;
  }

  img {
    display: flex;
    width: 100%;
    margin: 10px auto;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
  }

  code {
    background-color: #21212c;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    line-height: 25px;
    width: 100%;
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    white-space: pre-line;
    word-wrap: break-word;
  }

  pre {
    background-color: #21212c;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    overflow-x: scroll;
    padding: 0.5rem 1rem;
    word-wrap: break-word;
  }

  pre code {
    background-color: #21212c;
    padding: 0.5rem 0;
    white-space: pre;
    color: #fff;
  }
`;
