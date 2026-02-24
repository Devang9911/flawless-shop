export interface Rating {
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
export async function getAccessories(): Promise<Product[]> {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery",
      {
        cache: "no-store",
      },
    );

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

// https://fakestoreapi.com/products/category/jewelery
