import React from 'react';
import styled from 'styled-components';

const Blog = styled.div`
  display: block;
  width: 100%;
  height: 350px;
  overflow: hidden;
`;

const BlogContent = () => {
  return (
    <Blog>
      <h1>All Posts</h1>
    </Blog>
  )
}

export default BlogContent;
