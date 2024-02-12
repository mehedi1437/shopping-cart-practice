import { useLoaderData } from "react-router-dom";
import CardItems from "../Cards/CardItems";
import { addToLocalDB } from "../utils/localStorageDB";


const handleAddTOCart = (id) =>{
    // handle Add to cart from client Side 
 console.log('clicked id ',id);

//  Handle Add TO cart to Local Storage

addToLocalDB(id);



}
const Shop = () => {
  const {products} = useLoaderData();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10 mx-10 ml-10  ">
      {products.map((product) => (
        <CardItems key={product.id} product={product} handleAddTOCart={handleAddTOCart}></CardItems>
      ))}
    </div>
  );
};

export default Shop;
