import React from "react";
import { usePosts } from "../hooks/posts";
import Posts from "../components/posts/Posts";
import PageTransition from "../components/PageTransition";
import Navigation from "../components/navigation/Navigation";

const Home = () => {
  const { posts } = usePosts();

  return (
    <>
      {/* <PageTransition /> */}
      {/* <Navigation /> */}
      <Posts posts={posts} />
    </>
  );
};

export default Home;
