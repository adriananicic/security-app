"use state";
import PaginatedSection from "@/components/PaginatedSection";
import SDEDemo from "@/components/SDEDemo";
import XSSDemo from "@/components/XSSDemo";

export default function Home() {
  return (
    <div className="w-full h-full py-5 px-10">
      <PaginatedSection
        tabs={[
          { title: "XSS Demo", tab: <XSSDemo /> },
          {
            title: "Sensitive Data Exposure Demo",
            tab: <SDEDemo />,
          },
        ]}
      />
    </div>
  );
}
