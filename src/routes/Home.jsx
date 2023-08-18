import React from "react";
import { usePosts } from "../hooks/posts";
import PageTransition from "../components/PageTransition";
import Posts from "../components/posts/Posts";

const Home = () => {
  const { posts } = usePosts();

  return (
    <>
      <PageTransition />
      <Posts posts={posts} />
    </>
  );
};

export default Home;
