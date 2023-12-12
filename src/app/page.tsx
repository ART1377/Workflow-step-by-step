import { Product } from "../../next-type-d";
import ProductCard from "./components/ProductCard/ProductCard";
import { products } from "./db/db";

export default function Home() {
  return (
    <>
    <header>
      <h3>
        Product List
      </h3>
    </header>
      <div>
        {products.map((product: Product) => {
          return <ProductCard key={product.productId} productData={product} />;
        })}
      </div>
    </>
  );
}
