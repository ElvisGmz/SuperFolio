import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlogItem from "./BlogItem";

const List = styled.div`
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

  useEffect(() => {
    fetch(process.env.REACT_APP_BLOGSAPI)
      .then((blogs) => blogs.json())
      .then((blogs) => setBlogsList(blogs));
  }, []);

  return (
    <List>
      <Header>Hey quieres ver #Blogs </Header>
      {blogsList.map((item) => (
        <BlogItem
          key={item._id}
          idBlog={item._id}
          title={item.title}
          bannerUrl={item.bannerUrl}
          content={item.content}
          author={item.author}
          date={item.date}
          fileUrl = {item.fileUrl}
        />
      ))}
    </List>
  );
}
