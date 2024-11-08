import { useState } from "react";

const useCreateUser = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const createUser = async (
    username: string,
    password: string,
    isSensitiveDataExposed: boolean
  ) => {
    setLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/create-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, isSensitiveDataExposed }),
      }
    );

    const res = await response.json();

    if (!res.success) {
      setError(res.error);
    }

    setLoading(false);
  };

  return { createUser, error, loading };
};
export default useCreateUser;
