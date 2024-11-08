import { useState } from "react";

const useCreateComment = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const createComment = async (content: string) => {
    setLoading(true);

    const response = await fetch("/api/add-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    const res = await response.json();

    if (!res.success) {
      setError(res.error);
    }

    setLoading(false);
  };

  return { createComment, error, loading };
};
export default useCreateComment;
