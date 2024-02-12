import { useLoaderData } from "react-router-dom";
import ReviewItems from "../Cards/ReviewItems";

const Cart = () => {
  const { cartArray } = useLoaderData();
  console.log(cartArray);
  let total = 0;
  if (cartArray.length) {
   
    for (const product of cartArray) {
      total = total + product.price * product.quantity;
    }
  }

  return (
    <div className=" container mx-auto text-start ">
      <h1 className="font-semibold text-2xl mb-6">
        {cartArray.length ? " Review Items " : "Card is Empty !"}
      </h1>
      <div className="flex flex-col container mx-auto ">
        {cartArray?.map((product) => (
          <ReviewItems key={product.id} product={product}></ReviewItems>
        ))}
      </div>

      <h1 className="font-semibold text-2xl mt-6">Total price : {total} </h1>
    </div>
  );
};

export default Cart;
