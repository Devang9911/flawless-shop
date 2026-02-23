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

export const dynamic = "force-dynamic";

async function getAccessories() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery",
    { cache: "no-store" } // important
  );

  if (!res.ok) {
    throw new Error("Failed to fetch accessories");
  }

  return res.json();
}

async function ProductContainer() {
  const response : Product[] = await getAccessories()
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
