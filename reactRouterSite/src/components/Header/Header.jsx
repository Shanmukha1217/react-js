import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="sticky top-0 shadow-md flex items-center justify-between px-6 h-10 bg-slate-200">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-600 underline" : "text-gray-700"
              } hover:text-orange-600`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-600 underline" : "text-gray-700"
              } hover:text-orange-600`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-600 underline" : "text-gray-700"
              } hover:text-orange-600`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-600 underline" : "text-gray-700"
              } hover:text-orange-600`
            }
          >
            Github
          </NavLink>
        </div>

        <div>
          <button>Get Started</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
