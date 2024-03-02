import ActivityHub from "../../components/ActivityHub/ActivityHub";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <ActivityHub />
      <div className="hero min-h-screen max-w-full bg-base-200 flex flex-col">
        <div className="hero-content text-center">
          {/* <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button> */}
          <Dashboard />
          {/* § */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
