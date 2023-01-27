import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadersModal from "../components/common/loaders/LoadersModal";
import ContacHero from "../components/contac/ContacHero";
import useContac from "../hooks/useContac";
import { fetchReadContacData } from "../redux/thunks/contacThunk";

const ContacPage = () => {
  const dispatch = useDispatch();
  const { loading, contacData } = useContac();

  useEffect(() => {
    document.title = '¡Contacto! I EAKON';
    Object.keys(contacData).length === 0 && dispatch(fetchReadContacData());
  }, []);

  return (
    <>
      {loading && <LoadersModal />}
      <ContacHero contacData={contacData} />
    </>
  );
};
export default ContacPage;