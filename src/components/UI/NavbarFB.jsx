import { useState, useEffect, useRef } from "react";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { Map } from "./Map";
import slogan from "../../assets/images/logos/logo_gore_cusco_blanco.png";
import logoChincheroBlanco from "../../assets/images/logos/logo_muni_chinchero_blanco.png";
import useScreenSize from "../../hooks/useScreenSize";
const customNavbar = {
  root: {
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  collapse: {
    base: "w-full md:w-auto md:flex-grow md:flex md:justify-center",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
};

function NavbarFB() {
  const isScreenLarge = useScreenSize();

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Agrega el listener al montar
    window.addEventListener("scroll", handleScroll);

    // Limpia el listener al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      hidden={isActive("/") && isScreenLarge}
      theme={customNavbar}
      fluid
      className={`bg-black-40 text-white md:bg-black-40 ${!isActive('/') && "md:bg-primary"} z-100 xl:px-16 fixed z-50 w-full md:py-2 h-fit ${
        scrolled ? "md:bg-primary text-white" : "md:text-white"
      }`}
    >
      <Navbar.Brand as={Link} href="/">
        <img
          src={slogan}
          className="mr-6 h-10 sm:h-20"
          alt="Flowbite React Logo"
        />
        <img
          src={logoChincheroBlanco}
          className="mr-3 h-10 sm:h-16"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="text-white hover:bg-transparent" />
      <Navbar.Collapse className="">
        <>
          <div className={`font-bold md:text-lg flex justify-center`}>
            <Link
              to="/"
              className={`px-2 ${
                isActive("/") ? "border-b-4 " : "hover:border-b-4 "
              } ${scrolled ? "border-white" : "md:border-white"}`}
            >
              INICIO
            </Link>
          </div>
          <div className={`font-bold md:text-lg flex justify-center`}>
            <Link
              to="/nosotros"
              className={`px-2 ${
                isActive("/nosotros") ? "border-b-4 " : "hover:border-b-4 "
              } ${scrolled ? "border-white" : "md:border-white"}`}
            >
              NOSOTROS
            </Link>
          </div>

          <div className={`font-bold md:text-lg flex justify-center`}>
            <Link
              to="/programa"
              className={`px-2 ${
                isActive("/programa") ? "border-b-4 " : "hover:border-b-4 "
              } ${scrolled ? "border-white" : "md:border-white"}`}
            >
              PROGRAMA
            </Link>
          </div>

          <div className={`font-bold md:text-lg flex justify-center`}>
            <Link
              to="/ubicacion"
              className={`px-2 ${
                isActive("/ubicacion") ? "border-b-4 " : "hover:border-b-4 "
              } ${scrolled ? "border-white" : "md:border-white"}`}
            >
              UBICACIÓN
            </Link>
          </div>

          {/* <div className={`font-bold md:text-lg flex justify-center`}>
            <Map />
          </div> */}
        </>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarFB;
