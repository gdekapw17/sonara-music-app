import { useState } from "react";
import { logo } from "../assets";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { links } from "../assets/constants";

const Sidebar = () => {
  const NavLinks = ({ handleClick }) => (
    <div className="mt-10">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          end={link.to === "/"}
          onClick={() => {
            handleClick && handleClick();
          }}
          className={({ isActive }) =>
            `flex flex-row justify-start items-center my-8 text-sm font-medium hover:text-cyan-400 ${
              isActive ? "text-cyan-400 font-bold" : "text-gray-200"
            }`
          }
        >
          <link.icon className="w-6 h-6 mr-2 " />
          {link.name}
        </NavLink>
      ))}
    </div>
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* desktop menu */}
      <div className="hidden md:flex flex-col w-[240px] py-10 px-4 bg-gradient-to-b from-purple-900 to-purple-500">
        <img src={logo} alt="logo" className="w-full h-20 object-contain" />
        <NavLinks />
      </div>

      {/* mobile menu */}
      <div className="absolute md:hidden block top-6 right-3 z-10">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] z-10 backdrop-blur-lg md:hidden p-6 ${
          mobileMenuOpen ? `left-0` : `-left-full`
        }`}
      >
        <img
          src={logo}
          alt="logo"
          className="w-full h-20 opacity-75 object-contain"
        />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
