export const fetchProduct = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json(); // ✅ call the function
  return data; // returns { products: [...] }
};
