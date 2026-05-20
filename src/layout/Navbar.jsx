import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <menu className="bg-gray-400 flex justify-evenly h-20 mx-auto pt-6 font-bold border-b-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/ViborgHaveservice1">ViborgHaveservice1</NavLink>
        </li>
        <li>
          <NavLink to="/ViborgHaveservice2">ViborgHaveservice2</NavLink>
        </li>
      </menu>
    </nav>
  );
};

export default Navbar;
