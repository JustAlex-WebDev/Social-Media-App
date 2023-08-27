import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import { usePost } from "../hooks/posts";
import AddComment from "../components/comments/AddComment";
import PageTransition from "../components/PageTransition";
import CommentList from "../components/comments/CommentList";
import IndividualPost from "../components/posts/IndividualPost";
import { useAuth } from "../hooks/auth";

const Comments = () => {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);
  const { user } = useAuth();

  if (isLoading) return null;

  if (user) {
    return (
      <>
        <PageTransition />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="my-20 h-full w-full max-w-[1140px] m-auto bg-black p-8 flex flex-col justify-center items-center gap-8 text-white"
        >
          <IndividualPost post={post} />
          <AddComment post={post} />
          <CommentList post={post} />
        </m.div>
      </>
    );
  } else {
    <Navigate to="/singin" />;
  }
};

export default Comments;
