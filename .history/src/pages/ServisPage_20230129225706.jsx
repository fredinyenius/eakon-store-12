import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadersModal from "../components/common/loaders/LoadersModal";
import ServisHero from "../components/servis/ServisHero";

import useServis from "../hooks/useServis";
import { fetchReadServisData } from "../redux/thunks/servisThunk";

const ServisPage = () => {
  const dispatch = useDispatch();
  const { loading, servisData } = useServis();

  useEffect(() => {
    document.title = '¡Contacto! I EAKON';
    Object.keys(servisData).length === 0 && dispatch(fetchReadServisData());
  }, []);

  return (
    <>
      {loading && <LoadersModal />}
      <ServisHero servisData={servisData} />
      
    </>
  );
};
export default ServisPage;