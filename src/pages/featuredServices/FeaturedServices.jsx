import FeaturedServicesList from "./featuredServicesList/FeaturedServicesList";

const FeaturedServices = () => {
  return (
    <div className="container-fluid mt-5 pb-5" style={{backgroundColor: "#f6f6f6"}}>
      <h1 className="text-center pt-4 ">Featured Services</h1>
      <p className="text-center pb-3 mt-3">
      All our featured tour packages are given below
      </p>
      <FeaturedServicesList/>
    </div>
  );
};

export default FeaturedServices;
