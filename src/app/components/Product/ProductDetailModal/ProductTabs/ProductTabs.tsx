import React from "react";

type ProductTabsProps = {
  activeTab: string;
  switchTab: (tab: string) => void;
};

const ProductTabs: React.FC<ProductTabsProps> = ({ activeTab, switchTab }) => (
  <div className="flex justify-center mb-8 border-b-2 border-gray-light max-w-md mx-auto py-2">
    <button
      className={`mr-4 ${activeTab === "workflow" ? "font-bold" : ""}`}
      onClick={() => switchTab("workflow")}
    >
      Workflow
    </button>
    <button
      className={activeTab === "operations" ? "font-bold" : ""}
      onClick={() => switchTab("operations")}
    >
      Operations
    </button>
  </div>
);

export default ProductTabs;
