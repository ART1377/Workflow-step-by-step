import React from "react";
import Workflow from "../../../Product/Workflow/Workflow";
import { Product } from "../../../../../../next-type-d";
import ProductWorkflowInfo from "../ProductWorkflowInfo/ProductWorkflowInfo";

type Props = {
  productData: Product;
  productId: string;
};

const ProductWorkflowSection = ({ productData, productId }: Props) => (
  <>
    <section className="flex flex-col justify-center text-center">
      <ProductWorkflowInfo productData={productData} />
    </section>
    <section className="mt-10">
      <Workflow steps={productData?.steps!} id={productId} />
    </section>
  </>
);

export default ProductWorkflowSection;
