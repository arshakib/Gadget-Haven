import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const { product_title, product_image, price, product_id } = data;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product_image} className="rounded-xl w-80 h-44" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}K</p>
          <div className="card-actions">
            <Link to={`/${product_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
