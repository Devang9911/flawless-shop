import ProductCard from "./ProductCard";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

async function getAccessories(): Promise<Product[]> {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery",
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("API Error:", res.status);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}

async function ProductContainer() {
  const response: Product[] = await getAccessories();
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
