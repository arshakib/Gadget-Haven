import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="text-center h-[344px] bg-[#9538E2]">
        <h1 className="pt-9 text-white font-bold text-4xl">Dashboard</h1>
        <p className="text-white text-base mt-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="mt-10">
          <NavLink
            className={({ isActive }) =>
              `btn btn-outline btn-success px-16 py-4 rounded-3xl mr-8 ${
                isActive ? "btn-active" : ""
              } `
            }
            to="/dashboard"
          >
            <button>Cart</button>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `btn btn-outline btn-success px-16 py-4 rounded-3xl mr-8 ${
                isActive ? "btn-active" : ""
              } `
            }
            to="/dashboard/wishlist"
          >
            <button>Wishlist</button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
