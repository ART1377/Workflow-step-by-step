import React from "react";
import ProductCard from "../../../../components/Product/ProductCard/ProductCard";
import { Product } from "../../../../../../next-type-d";

type Props = {
  columnsNumber: number;
  filteredProducts: Product[];
};

const ProductsList = ({ columnsNumber, filteredProducts }: Props) => {
  return (
    <div className="flex flex-wrap gap-3">
      {filteredProducts.length ? (
        filteredProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            productData={product}
            columns={columnsNumber}
          />
        ))
      ) : (
        <div>
          <p>There is no product with this information.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
