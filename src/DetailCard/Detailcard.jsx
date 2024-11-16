import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { addToStorage, addTowishlist } from "../Storage/Stogae";

const Detailcard = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const found = data.find((data) => data.product_id == id);
    setDetail(found);
  }, [data, id]);

  const handleAddToCart = (id) => {
    addToStorage(id);
  };

  const handleAddToWishList = (id) => {
    addTowishlist(id);
  };

  return (
    <div className="">
      <div>
        <div className="text-center h-[463px] bg-[#9538E2]">
          <h1 className="pt-9 text-white font-bold text-4xl">
            Product Details
          </h1>
          <p className="text-white text-base mt-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br /> the coolest accessories, we have it all!
          </p>
        </div>
        <div className="w-[1280px] h-[567px] flex gap-10 mx-auto -mt-60 p-11 bg-base-100 shadow- rounded-lg border">
          <div>
            <img
              className="w-[424px] h-[503px] rounded-xl"
              src={detail.product_image}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">{detail.product_title}</h1>
            <p className="text-lg font-semibold mt-2">price: ${detail.price}</p>
            <p className=" w-[95px] px-4 py-1 text-center text-white bg-[#9538E2] rounded-xl mt-2">
              {detail.availability ? "In Stock" : "Out of Stock"}
            </p>

            <p className="mt-4">{detail.description}</p>

            <ul className="space-y-4 list-disc list-inside mt-4">
              <li className="font-semibold">
                Specification
                <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  {detail?.Specification?.map((word) => (
                    <li key={word.id}>{word}</li>
                  ))}
                </ol>
              </li>
            </ul>

            <h1 className="text-xl font-bold mt-4">Rating ⭐ </h1>
            <Stack direction="row" spacing={1}>
              <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={detail?.rating}
              />
              <h1>{detail?.rating}</h1>
            </Stack>

            <div className="mt-5">
              <button
                onClick={() => handleAddToCart(detail.product_id)}
                className="btn btn-primary"
              >
                Add to cart
              </button>
              <button
                onClick={() => handleAddToWishList(detail.product_id)}
                className="btn btn-outline ml-4"
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailcard;
