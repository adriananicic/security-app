import useCreateComment from "@/hooks/useCreateComment";
import React, { useState } from "react";
import Spinner from "./Spinner";

const AddCommentForm = ({ refetch }: { refetch: Function }) => {
  const { createComment, error, loading } = useCreateComment();
  const [content, setContent] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (content.trim()) {
      await createComment(content);
      await refetch();
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-3 p-3">
      <textarea
        className="w-full border rounded p-2"
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
      />
      {loading ? (
        <Spinner />
      ) : (
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      )}
      {error ? <p className="text-red-500">{error}</p> : <></>}
    </form>
  );
};

export default AddCommentForm;
