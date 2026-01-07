import { useLoaderData } from "react-router";
import useTitle from "../hooks/useTitle";
import Header from "../components/Header/Header.jsx";
import Slider from "../components/Slider/Slider.jsx";
import PopularToys from "../components/PopularToys/PopularToys.jsx";
import NewsletterSignup from "../components/NewsLetterSignup.jsx/NewsLetterSignup.jsx";

const Home = () => {
  useTitle("Home");

  const data = useLoaderData();
  return (
    <div className="min-h-[calc(100vh-72px)]">
      <Header></Header>
      <section>
        <Slider data={data}></Slider>
      </section>
      <section>
        <PopularToys data={data}></PopularToys>
      </section>
      <section>
        <NewsletterSignup></NewsletterSignup>
      </section>
    </div>
  );
};

export default Home;
