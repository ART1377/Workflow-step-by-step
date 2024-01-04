import React from "react";
import WorkflowOperations from "../../Workflow/WrokflowOperations/WorkflowOperations";
import { Product } from "../../../../../../next-type-d";



type OperationsSectionProps = {
  productData: Product;
  productId: string;
};

const ProductOperationsSection: React.FC<OperationsSectionProps> = ({ productData, productId }) => (
  <section className="my-10">
    <div className="p-4 flex flex-col items-center gap-6">
      {productData?.steps.map((step) => (
        <WorkflowOperations key={step.step} step={step} id={productId} />
      ))}
    </div>
  </section>
);

export default ProductOperationsSection;
