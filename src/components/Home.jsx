import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import CarouselMain from "./home/CarouselMain";
import Resena from "./home/Resena";
import { FaChevronCircleUp } from "react-icons/fa";

import slogan from "../assets/images/logos/logo_gore_cusco_blanco.png";
import logoFao from "../assets/images/logos/fao.png";
import logoMuniChinchero from "../assets/images/logos/logo_muni_chinchero_blanco.png";
import fondoCamelidos from "../assets/images/camelidos/fondo_festicamelidos.png";
import fondoCamelidosMobile from "../assets/images/camelidos/fondo-camelidos-mobile.png";
import PromocionVideo from "./home/PromocionVideo";
import Noticias from "./home/Noticias";
import Participantes from "./home/Participantes";
import video_chinchero from "../assets/videos/video_chinchero.mp4";
import useScreenSize from "../hooks/useScreenSize";
const Home = () => {
  useScrollTop();
  const [backgroundImage, setBackgroundImage] = useState(fondoCamelidos);
  const isScreenLarge = useScreenSize();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage(fondoCamelidosMobile);
      } else {
        setBackgroundImage(fondoCamelidos);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Para un efecto de desplazamiento suave
    });
  };

  return (
    <>
      <div className="w-full min-h-[200px] sm:h-[600px] md:h-[530px] lg:h-[105vh] relative">
        <video
          className="w-full h-full object-cover object-bottom absolute md:mt-0"
          autoPlay
          loop
          muted
        >
          <source src={video_chinchero} type="video/mp4" />
        </video>
        <div className={`absolute w-1/4 h-full bg-black-40 flex ${!isScreenLarge && "hidden"}`}>
          <div className="flex flex-col h-full py-[2rem] justify-between">
            <div className="flex-1 flex justify-center">
              <img src={slogan} alt="logo slogan" className="w-2/3 object-contain" />
            </div>
            <div className="flex-1 flex pl-8 md:pl-12 xl:pl-24">
              <div className="text-base sm:text-xl font-bold text-white">
                <ul className="flex flex-col gap-5">
                  <li className="border-white border-b-4 px-4">
                    <a href="/">INICIO</a>
                  </li>
                  <li>
                    <Link to="/nosotros">NOSOTROS</Link>
                    {/* <a href="/nosotros">NOSOTROS</a> */}
                  </li>
                  <li>
                    {/* <a href="/programa">PROGRAMA</a> */}
                    <Link to="/programa">PROGRAMA</Link>

                  </li>
                  <li>
                    <Link to="/ubicacion">UBICACION</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={logoMuniChinchero}
                alt="logo muni chinchero"
                className="w-5/6 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <CarouselMain />
      <Resena />
      <PromocionVideo />
      <Noticias />
      <div>
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
          zIndex: 50,
        }}
      >
        <FaChevronCircleUp className="text-blue-700 h-16 w-16"/>
      </button>
    </div>
    </>
  );
};
export default Home;
