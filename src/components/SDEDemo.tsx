"use client";
import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import useGetUsers from "@/hooks/useGetUsers";
import Spinner from "./Spinner";
import CreateUserForm from "./CreateUserForm";

const SDEDemo = () => {
  const {
    error: fetchError,
    loading: fetching,
    refetch,
    users,
  } = useGetUsers();

  const [isSensitiveDataExposed, setIsSensitiveDataExposed] =
    useState<boolean>(false);

  return (
    <div className="w-full border-blue-400 rounded-lg m-3 p-4 justify-center gap-2">
      <ToggleSwitch
        label="SDE Vulnerability"
        onToggle={() => {
          setIsSensitiveDataExposed((prev) => !prev);
        }}
      />
      <div className="my-3">
        <CreateUserForm
          isSensitiveDataExposed={isSensitiveDataExposed}
          refetch={refetch}
        />
      </div>
      <h2 className="text-2xl font-bold">Users</h2>
      {fetching && <Spinner />}
      {fetchError && <p className="text-red-700">{fetchError}</p>}
      {users &&
        users.map((user) => {
          return (
            <div
              key={user.id}
              className="text-xl py-2 px-1 border-b-2 flex items-center gap-3 "
            >
              <p>Username: {user.username}</p>
              <p>Password: {user.password}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SDEDemo;
