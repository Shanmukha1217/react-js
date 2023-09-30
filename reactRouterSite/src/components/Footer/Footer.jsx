import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen flex flex-wrap justify-between items-center px-10 py-2 border-t-2 bg-gray-300">
      <div>Logo</div>
      <div className="flex flex-col ">
        <NavLink className="underline hover:no-underline" to="/">
          Home
        </NavLink>
        <NavLink className="underline hover:no-underline" to="/about">
          About
        </NavLink>
        <NavLink className="underline hover:no-underline" to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="cursor-pointer">Top</div>
    </footer>
  );
};

export default Footer;
