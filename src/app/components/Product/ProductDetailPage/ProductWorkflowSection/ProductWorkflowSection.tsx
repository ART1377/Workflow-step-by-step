import React from "react";
import Workflow from "../../../Product/Workflow/Workflow";
import { Product } from "../../../../../../next-type-d";
import ProductInfo from "../ProductInfo/ProductInfo.tsx";


type WorkflowSectionProps = {
  productData: Product;
  productId: string;
};

const ProductWorkflowSection: React.FC<WorkflowSectionProps> = ({ productData, productId }) => (
  <>
    <section className="flex flex-col justify-center text-center">
        <ProductInfo productData={productData} />
    </section>
    <section className="mt-10">
      <Workflow steps={productData?.steps!} id={productId} />
    </section>
  </>
);

export default ProductWorkflowSection;
