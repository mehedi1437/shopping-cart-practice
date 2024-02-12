import { getDataFromLocalDB } from "../utils/localStorageDB";

export const AllProductsDataAndSavedCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const storedCart = getDataFromLocalDB();
  let cartArray = [];
  for (const id in storedCart) {
    const findingProducts = products.find((product) => product.id === id);
    findingProducts.quantity = storedCart[id];
    cartArray.push(findingProducts);
  }
  return { products, cartArray };
};
