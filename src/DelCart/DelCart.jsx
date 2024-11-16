import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { clearStorage, getStored, removeFromStorage } from "../Storage/Stogae";
import model from "../assets/Group.png";

const DelCart = () => {
  const [addcard, setAddcard] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedCart = getStored();
    const cart = data.filter((data) => storedCart.includes(data.product_id));

    setAddcard(cart);
  }, []);

  const removeFromCart = (id) => {
    removeFromStorage(id);
    const storedCart = getStored();
    const cart = data.filter((data) => storedCart.includes(data.product_id));

    setAddcard(cart);
  };
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const total = addcard.reduce((acc, curr) => acc + curr.price, 0);

    setPrice(total);
  }, [addcard]);

  const sort = () => {
    const sorted = [...addcard].sort((a, b) => b.price - a.price);

    setAddcard(sorted);
  };

  const handelPurchase = () => {
    document.getElementById("my_modal_5").showModal();
    clearStorage();
  };

  const closeModal = () => {
    setAddcard([]);
  };
  return (
    <div>
      <div className="flex justify-between p-8 mx-36">
        <div>
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">
            Total cost: ${price.toFixed(2)}
          </h1>
          <button onClick={sort} className="btn btn-outline btn-primary">
            Sort by Price
          </button>
          <button
            onClick={() => handelPurchase()}
            className="btn btn-active btn-primary"
          >
            Purchase
          </button>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <img className="mx-auto" src={model} alt="" />
          <h3 className="font-bold text-lg">Payment Successfully</h3>
          <hr />
          <p className="py-4">
            Thanks for purchasing. Total: ${price.toFixed(2)}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

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

      {/* <div className="flex justify-center ">
        <div className="flex w-[1280px] h-[188px] p-8 border rounded-xl">
          <div>
            <img
              className="w-[200px] h-[124px] rounded-lg"
              src={banner}
              alt=""
            />
          </div>
          <div className="ml-10">
            <h1 className="text-2xl font-bold">name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            </p>
            <h1 className="text-xl font-semibold">price</h1>
          </div>
        </div>
        <button className="btn btn-circle btn-outline m-5">
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
      </div> */}
    </div>
  );
};

export default DelCart;
