import { useEffect, useState } from "react";

type comment = {
  content: string;
  id: string;
};

const useGetComments = () => {
  const [comments, setComments] = useState<comment[]>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchComments = async () => {
    setLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/get-all-comments`
    );
    const res = await response.json();
    if (res.success) {
      setComments(res.comments);
    } else {
      setError(res.error);
    }

    setLoading(false);
  };

  const refetch = async () => {
    await fetchComments();
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return { comments, error, refetch, loading };
};

export default useGetComments;
