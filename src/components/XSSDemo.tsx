"use client";
import useGetComments from "@/hooks/useGetComments";
import React, { useState } from "react";
import Spinner from "./Spinner";
import ToggleSwitch from "./ToggleSwitch";
import AddCommentForm from "./AddCommentForm";

const XSSDemo = () => {
  const {
    comments,
    error: fetchError,
    refetch,
    loading: fetching,
  } = useGetComments();

  const [isXSSVulnerable, setIsXSSVulnerable] = useState<boolean>(false);

  return (
    <div>
      <div className="w-full border-blue-400 rounded-lg m-3 p-4 justify-center gap-2">
        <ToggleSwitch
          label="XSS Vulnerability"
          onToggle={() => {
            setIsXSSVulnerable((prev) => !prev);
            refetch();
          }}
        />
        <p className="text-2xl font-bold">Comments</p>

        {fetching && <Spinner />}
        {fetchError && <p className="text-red-700">{fetchError}</p>}
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="text-xl py-2 px-1 border-b-2 ">
              {isXSSVulnerable ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: comment.content,
                    }}
                  />
                </>
              ) : (
                <span>{comment.content}</span>
              )}
            </div>
          );
        })}
        <AddCommentForm refetch={refetch} />
      </div>
    </div>
  );
};

export default XSSDemo;
