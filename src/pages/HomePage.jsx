import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeBestSellers from "../components/home/HomeBestSellers";
import HomeHero from "../components/home/HomeHero";
import useHome from "../hooks/useHome";
import { fetchReadBestSellersProducts, fetchReadHeroProducts } from "../redux/thunks/homeThunk";

const HomePage = () => {
  const dispatch = useDispatch();
  const { heroProducts } = useHome();

  useEffect(() => {
    dispatch(fetchReadHeroProducts());
    dispatch(fetchReadBestSellersProducts());
  }, []);

  return (
    <>
      <HomeHero heroProducts={heroProducts} />
      <HomeBestSellers />
    </>
  );
};

export default HomePage;