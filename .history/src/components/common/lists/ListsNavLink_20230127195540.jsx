import { NavLink } from "react-router-dom";

const ListsNavLink = ({ className = '', handleClickList = () => { }, handleClickNavLink = () => { } }) => {
  return (
    <ul
      className={list ${className}}
      onClick={handleClickList}
    >
      <li>
        <NavLink
          to="/productos"
          className={({ isActive }) => isActive ? "listlink listlink--active" : "listlink"}
          onClick={handleClickNavLink}
        >
          Productos
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/servicios"
          className={({ isActive }) => isActive ? "listlink listlink--active" : "listlink"}
          onClick={handleClickNavLink}
        >
          Servicios
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/nosotros"
          className={({ isActive }) => isActive ? "listlink listlink--active" : "listlink"}
          onClick={handleClickNavLink}
        >
          Nosotros
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacto"
          className={({ isActive }) => isActive ? "listlink listlink--active" : "listlink"}
          onClick={handleClickNavLink}
        >
          Contacto
        </NavLink>
      </li>
    </ul>
  );
};

export default ListsNavLink;