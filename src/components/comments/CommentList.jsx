import React from "react";
import { useComments } from "../../hooks/comments";
import Comment from "./Comment";

const CommentList = ({ post }) => {
  const { comments, isLoading } = useComments(post?.id);

  if (isLoading) return null;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 mt-12">
      <div className="text-lg font-semibold">Comments</div>
      {comments?.length === 0 ? (
        <div className="-mt-8">There are no comments yet!</div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-12">
          {comments?.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
