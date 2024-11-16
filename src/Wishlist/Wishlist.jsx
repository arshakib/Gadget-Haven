import { useEffect, useState } from "react";
import {
  addToStorage,
  getwishlist,
  removeFromwishlist,
} from "../Storage/Stogae";
import { useLoaderData } from "react-router-dom";

const Wishlist = () => {
  const [addcard, setAddcard] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedCart = getwishlist();
    const cart = data.filter((data) => storedCart.includes(data.product_id));

    setAddcard(cart);
  }, []);

  const removeFromCart = (id) => {
    removeFromwishlist(id);
    const storedCart = getwishlist();
    const cart = data.filter((data) => storedCart.includes(data.product_id));

    setAddcard(cart);
  };

  const handleAddToCart = (id) => {
    addToStorage(id);
  };

  return (
    <div>
      <div className="flex justify-between p-8 mx-36">
        <h1 className="text-2xl font-bold">Wishlist</h1>
      </div>

      {addcard.map((data) => (
        <>
          <div className="flex justify-center mt-3 ">
            <div className="flex w-[1280px] h-[188px] p-8 border rounded-xl">
              <div>
                <img
                  className="w-[200px] h-[124px] rounded-lg"
                  src={data.product_image}
                  alt=""
                />
              </div>
              <div className="ml-10">
                <h1 className="text-2xl font-bold">{data.product_title}</h1>
                <p>{data.description}</p>
                <h1 className="text-xl font-semibold">Price: ${data.price}</h1>

                <button
                  onClick={() => handleAddToCart(data.product_id)}
                  className="btn btn-primary"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(data.product_id)}
              className="btn btn-circle btn-outline m-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Wishlist;
