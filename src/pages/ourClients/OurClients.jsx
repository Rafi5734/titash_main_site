import OurClientsList from "./ourClientsList/OurClientsList";

const OurClients = () => {
  return (
    <div className="container-fluid mt-5 pb-5" style={{backgroundColor: "#f6f6f6"}}>
      <h1 className="text-center pt-5">Our Clients</h1>
      <p className="text-center">
        We have a lot of valuable clients throughout the whole world
      </p>
      <OurClientsList />
    </div>
  );
};

export default OurClients;
