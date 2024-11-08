import React, { FC, useState } from "react";
import Spinner from "./Spinner";
import useCreateUser from "@/hooks/useCreateUser";

type UserData = {
  username: string;
  password: string;
};

interface ICreateUserFormProps {
  refetch: Function;
  isSensitiveDataExposed: boolean;
}

const CreateUserForm: FC<ICreateUserFormProps> = ({
  isSensitiveDataExposed,
  refetch,
}) => {
  const { createUser, error, loading } = useCreateUser();
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userData.username && userData.password) {
      await createUser(
        userData.username,
        userData.password,
        isSensitiveDataExposed
      );
      await refetch();
      setUserData({ username: "", password: "" }); // Clear input fields after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 p-3">
      <input
        type="text"
        name="username"
        className="w-full border rounded p-2"
        placeholder="Username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        className="w-full border rounded p-2"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
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
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default CreateUserForm;
