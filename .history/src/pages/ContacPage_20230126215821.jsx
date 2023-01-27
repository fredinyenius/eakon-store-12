import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContacHero from "../components/contac/ContacHero";
import LoadersModal from "../components/common/loaders/LoadersModal";
import useContac from "../hooks/useContac";
import { fetchReadContacData } from "../redux/thunks/contacThunk";

const ContacPage = () => {
  const dispatch = useDispatch();
  const { loading, contacData } = useContac();

  useEffect(() => {
    document.title = '¡Nosotros! I EAKON';
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