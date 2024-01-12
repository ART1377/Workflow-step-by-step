import React from "react";
import ProductTabs from "./ProductTabs/ProductTabs";
import ProductWorkflowSection from "./ProductWorkflowSection/ProductWorkflowSection";
import ProductOperationsSection from "./ProductOperationsSection/ProductOperationsSection";
import { Product } from "../../../../../next-type-d";
import BaseModal from "../../Global/BaseModal/BaseModal";

type Props = {
  activeTab: string;
  switchTab: (tab: string) => void;
  productData: Product;
  isModalOpen: boolean;
  closeModal: () => void;
};

const ProductDetailModal = ({
  activeTab,
  switchTab,
  productData,
  isModalOpen,
  closeModal,
}: Props) => {
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

export default ProductDetailModal;
