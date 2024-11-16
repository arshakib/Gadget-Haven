/* eslint-disable react/prop-types */

import wishList from "../assets/wishList.png";
import cart from "../assets/shopping-cart.png";
import { Link, NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const url = useLocation().pathname;

  return (
    <div
      className={`mx-56 pt-8 bg-opacity-0 ${
        url == "/" ? "text-white" : "text-black"
      }`}
    >
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `btn btn-wide btn-outline btn-primary mb-3 ${
                      isActive ? "btn-active" : ""
                    } `
                  }
                  to="/"
                >
                  <button>Home</button>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    ` ${isActive ? "underline" : ""} `
                  }
                  to="/dashboard"
                >
                  <button>Dashboard</button>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    ` ${isActive ? "underline" : ""} `
                  }
                  to="/map"
                >
                  <button>Map</button>
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to="/">
            Gadget Heaven
          </Link>
          {/* <a className="btn btn-ghost text-xl">Gadget Heaven</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) => ` ${isActive ? "underline" : ""} `}
                to="/"
              >
                <button>Home</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => ` ${isActive ? "underline" : ""} `}
                to="/dashboard"
              >
                <button>Dashboard</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => ` ${isActive ? "underline" : ""} `}
                to="/map"
              >
                <button>Map</button>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle mr-5"
              >
                <div className="indicator bg-white p-2 rounded-full">
                  <img className="h-5 w-5 mr-3 bg-white" src={cart} alt="" />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator bg-white p-2 rounded-full">
                  <img className="h-5 w-5 mr-3" src={wishList} alt="" />

                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
