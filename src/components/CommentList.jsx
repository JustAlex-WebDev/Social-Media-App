import React from "react";
import { useComments } from "../hooks/comments";
import Comment from "./Comment";

const CommentList = ({ post }) => {
  const { comments, isLoading } = useComments(post.id);

  if (isLoading) return "Loading...";

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="text-lg font-semibold">Comments</div>
      <div className="w-full flex flex-col justify-center items-center gap-12">
        {comments?.map((comment) => (
          <Comment key={comment?.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
