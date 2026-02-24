import { getMens, Product } from "./getMans";
import ProductCard from "./ProductCard";

async function ProductContainer() {
  const response: Product[] = await getMens();

  if (!response || response.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Men's products unavailable right now 😢
      </div>
    );
  }

  return (
    <div className="w-full py-5">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {response.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
