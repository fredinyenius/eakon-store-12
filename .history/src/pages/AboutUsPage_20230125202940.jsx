import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReadAboutUsData } from "../redux/thunks/aboutUsThunk";

const AboutUsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = '¡Nosotros! I EAKON';
    dispatch(fetchReadAboutUsData());
  }, []);

  return (
    <h1>Nosotros</h1>
  );
};
export default AboutUsPage;