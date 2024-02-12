import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] text-2xl text-center mt-20 p-32 bg-slate-400">
        <h1>This is Home Component</h1>
        <Link to="/shop">
          <button className="btn bg-[#37d5f1]">Shop Now </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
