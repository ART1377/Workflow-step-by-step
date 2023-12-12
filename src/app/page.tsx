import { Product } from "../../next-type-d";
import ProductCard from "./components/ProductCard/ProductCard";
import { products } from "./db/db";

export default function Home() {
  return (
    <>
      <div className="p-2 xs:p-4">
        <div className="border-b-2 mb-4">
          <h5>Product List</h5>
        </div>
        <div className="flex flex-wrap gap-3">
          {products.map((product: Product) => {
            return (
              <ProductCard key={product.productId} productData={product} />
            );
          })}
        </div>
      </div>
    </>
  );
}
