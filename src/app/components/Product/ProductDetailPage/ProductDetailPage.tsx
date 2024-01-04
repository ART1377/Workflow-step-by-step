import React from "react";
import ProductTabs from "./ProductTabs/ProductTabs";
import ProductWorkflowSection from "./ProductWorkflowSection/ProductWorkflowSection";
import ProductOperationsSection from "./ProductOperationsSection/ProductOperationsSection";
import { Product } from "../../../../../next-type-d";
import BaseModal from "../../Gloabal/BaseModal/BaseModal";

type ProductDetailPageProps = {
  activeTab: string;
  switchTab: (tab: string) => void;
  productData: Product;
  isModalOpen: boolean;
  closeModal: () => void;
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  activeTab,
  switchTab,
  productData,
  isModalOpen,
  closeModal,
}) => {
  return (
    <>
      <BaseModal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <ProductTabs activeTab={activeTab} switchTab={switchTab} />
          {activeTab === "workflow" && (
            <ProductWorkflowSection
              productData={productData}
              productId={productData.id}
            />
          )}
          {activeTab === "operations" && (
            <ProductOperationsSection
              productData={productData}
              productId={productData.id}
            />
          )}
        </div>
      </BaseModal>
    </>
  );
};

export default ProductDetailPage;
