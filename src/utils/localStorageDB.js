// Add cart data to Local Storage

const addToLocalDB = (id) => {
  const getData = getDataFromLocalDB();

  // Add Quantity
  let quantity = getData[id];
  if (quantity) {
    quantity = quantity + 1;
    getData[id] = quantity;
  } else {
    getData[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(getData));
};

// Get cart Data from Local Storage

const getDataFromLocalDB = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export { addToLocalDB, getDataFromLocalDB };
