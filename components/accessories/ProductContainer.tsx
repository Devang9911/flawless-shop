import ProductCard from "@/components/accessories/ProductCard";
import { getAccessories, Product } from "@/components/accessories/getAccessories";

export default async function AccessoriesPage() {
  const products: Product[] = await getAccessories();

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Accessories unavailable right now 😢
      </div>
    );
  }

  return (
    <div className="w-full py-10 px-6">
      <h1 className="text-3xl font-bold mb-8">Accessories</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}