interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export async function getMens(): Promise<Product[]> {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/men%27s%20clothing",
      {
        cache: "no-store",
      },
    );
    console.log(res.status)

    if (!res.ok) {
      console.error("API failed:", res.status);
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
