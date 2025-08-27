import type { ProductDTO, ProductsResponse } from "../types/Product";

export async function getProducts(query: string = ""): Promise<ProductDTO[]> {
  const searchPart = query ? `/search?q=${encodeURIComponent(query)}` : "";
  const response = await fetch(`https://dummyjson.com/products${searchPart}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
  const data: ProductsResponse  = await response.json();
  return Array.isArray(data?.products) ? data.products : [];
}


