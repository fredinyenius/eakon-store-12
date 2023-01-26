import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutUsHero from "../components/about-us/AboutUsHero";
import LoadersModal from "../components/common/loaders/LoadersModal";
import useAboutUs from "../hooks/useAboutUs";
import { fetchReadAboutUsData } from "../redux/thunks/aboutUsThunk";

const AboutUsPage = () => {
  const dispatch = useDispatch();
  const { loading, aboutUsData } = useAboutUs();

  useEffect(() => {
    document.title = '¡Nosotros! I EAKON';
    Object.keys(aboutUsData).length === 0 && dispatch(fetchReadAboutUsData());
  }, []);

  return (
    <>
      {loading && <LoadersModal />}
      <AboutUsHero aboutUsData={aboutUsData} />
    </>
  );
};
export default AboutUsPage;