import { useSelector } from "react-redux";

const useContac = () => {
  return (useSelector(state => state.Contac));
};

export default useContac;   