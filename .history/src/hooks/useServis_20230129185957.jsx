import { useSelector } from "react-redux";

const useServis = () => {
  return (useSelector(state => state.servis));
};

export default useServis;  