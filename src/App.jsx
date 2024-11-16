import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

function App() {
  const data = useLoaderData();
  return (
    <>
      <div className="max-w-[1540px] mx-auto">
        <Nav data={data}></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
