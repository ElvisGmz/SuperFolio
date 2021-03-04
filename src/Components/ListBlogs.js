import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../Components/Loader";
import styled from "styled-components";
import BlogItem from "./BlogItem";

const List = styled.main`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: row wrap;
  margin-bottom: 2rem;
`;

const Header = styled.h1`
  min-width: 100%;
  text-align: center;
  font-size: 40px;
  margin-top: 2rem;
`;

export default function ListBlogs() {
  const [blogsList, setBlogsList] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_BLOGSAPI)
      .then((blogs) => blogs.json())
      .then((blogs) => setBlogsList(blogs))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <List>
      {Loading ? (
        <>
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
          <Loader />
        </>
      ) : (
        <>
          <Helmet>
            <title>Elvis Gomez | Blog</title>
            <meta name="title" content="Elvis Gomez | Blog" />
            <meta
              name="description"
              content="Ya sea para aprender, solucionar o simplemente leer. Cual sea tu motivo no te arrepentiras de entrar al mundo del desarrollo en este blog"
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta property="og:title" content="Elvis Gomez | Blog" />
            <meta
              property="og:description"
              content="Ya sea para aprender, solucionar o simplemente leer. Cual sea tu motivo no te arrepentiras de entrar al mundo del desarrollo en este blog"
            />
            <meta
              property="og:image"
              content="https://res.cloudinary.com/superfolio/image/upload/v1614892317/blogsmd/58f6a01695be445d0e40b92f33a0c8b5_wzczdw.webp"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content="Elvis Gomez | Blog" />
            <meta
              property="twitter:description"
              content="Ya sea para aprender, solucionar o simplemente leer. Cual sea tu motivo no te arrepentiras de entrar al mundo del desarrollo en este blog"
            />
            <meta
              property="twitter:image"
              content="https://res.cloudinary.com/superfolio/image/upload/v1614892317/blogsmd/58f6a01695be445d0e40b92f33a0c8b5_wzczdw.webp"
            />
            <meta
              name="keywords"
              content="blog, dev, web, front-end, JavaScript, react, code, elvisdev, elvisgmz, learning, backend, fullstack"
            />
          </Helmet>
          <Header>Bienvenid@ a mi #Blog </Header>
          {blogsList
            .slice(0)
            .reverse()
            .map((item) => (
              <BlogItem
                key={item._id}
                idBlog={item._id}
                title={item.title}
                bannerUrl={item.bannerUrl}
                content={item.content}
                author={item.author}
                date={item.date}
                fileUrl={item.fileUrl}
              />
            ))}
        </>
      )}
    </List>
  );
}
