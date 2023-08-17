import React from "react";
import PageTransition from "../components/PageTransition";
import Posts from "../components/Posts";
import { usePosts } from "../hooks/posts";

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
