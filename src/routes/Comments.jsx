import React from "react";
import { useParams } from "react-router-dom";
import AddComment from "../components/AddComment";
import CommentList from "../components/CommentList";
import IndividualPost from "../components/IndividualPost";
import { usePost } from "../hooks/posts";

const Comments = () => {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);

  if (isLoading) return "Loading...";

  return (
    <div className="my-20 h-full w-full max-w-[1140px] m-auto bg-black p-8 flex flex-col justify-center items-center gap-8 text-white">
      <IndividualPost post={post} />
      <AddComment post={post} />
      <CommentList post={post} />
    </div>
  );
};

export default Comments;
