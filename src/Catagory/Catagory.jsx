import { NavLink } from "react-router-dom";

const Catagory = () => {
  return (
    <div className="mt-28 ">
      <div className=" mx-auto card bg-base-100 shadow-xl p-7">
        <div className=" flex flex-col ">
          <NavLink
            className={({ isActive }) =>
              `btn btn-wide btn-outline btn-primary mb-3 ${
                isActive ? "btn-active" : ""
              } `
            }
            to="/category/phone"
          >
            <button>Phone</button>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `btn btn-wide btn-outline btn-primary mb-3 ${
                isActive ? "btn-active" : ""
              } `
            }
            to="/category/laptop"
          >
            <button>Laptop</button>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `btn btn-wide btn-outline btn-primary mb-3 ${
                isActive ? "btn-active" : ""
              } `
            }
            to="/category/smartwatch"
          >
            <button>Smart Watch</button>
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Catagory;
