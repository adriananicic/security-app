"use client";
import React, { FC, ReactNode, useState } from "react";

type Tab = {
  title: string;
  tab: ReactNode;
};

interface ITabProps {
  tabs: Tab[];
}

const PaginatedSection: FC<ITabProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
  return (
    <div className="w-full">
      <div className="w-full h-16 flex justify-center items-center m-2 gap-3">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            onClick={() => setSelectedTab(tab)}
            className="py-2 px-4 hover:text-blue-600 duration-100 transition-all cursor-pointer border-2 border-gray-300 rounded-xl shadow-xl"
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="w-full">{selectedTab.tab}</div>
    </div>
  );
};

export default PaginatedSection;
