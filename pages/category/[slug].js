import React, { useState, useEffect } from 'react';
import { getPosts, getPostDetails } from '../../services';
import { getCategories } from '../../services';
import { PostCard } from '../../components';

const PostCategory = ({ category }) => {
  return (
    <div className='lg:col-span-8 col-span-1'>
      {/* {posts.map((post) => (
        <PostCard post={post.node} key={post.title} />
      ))} */}
    </div>
  );
};

export default PostCategory;

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   return {
//     paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//     fallback: false,
//   };
// }

// export async function getStaticProps() {
//   const category = await getCategory();

//   return {
//     props: { posts },
//   };
// }
