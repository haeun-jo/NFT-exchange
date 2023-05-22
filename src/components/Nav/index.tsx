import { NavLink } from "react-router-dom";

import { ROOT } from "../../constants/path";

type pathType = {
  [key: string]: string;
};

const Nav = () => {
  const menus: string[] = ["All", "Collections", "Singles"];

  const menusPath: pathType = {
    All: ROOT.ALL,
    Collections: ROOT.COLLECTIONS,
    Singles: ROOT.SINGLES,
  };

  return (
    <ul className="nav">
      {menus.map((item: string, idx: number) => {
        return (
          <li key={idx} className="nav-item">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " activated" : "")
              }
              to={menusPath[item]}
            >
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Nav;
