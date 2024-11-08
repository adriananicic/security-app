import { useEffect, useState } from "react";

type user = {
  username: string;
  password: string;
  id: string;
};

const useGetUsers = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setLoading(true);

    const response = await fetch("/api/get-all-users");
    const res = await response.json();
    if (res.success) {
      setUsers(res.users);
    } else {
      setError(res.error);
    }

    setLoading(false);
  };

  const refetch = async () => {
    await fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, error, refetch, loading };
};

export default useGetUsers;
