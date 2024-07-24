import React, { useState, useEffect } from "react";

import CarouselMain from "./home/CarouselMain";
import Resena from "./home/Resena";

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

  return (
    <>
      <div className="w-full h-[600px] md:h-[530px] lg:h-[105vh] relative">
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
                  <li>
                    <a href="/">INICIO</a>
                  </li>
                  <li>
                    <a href="/nosotros">NOSOTROS</a>
                  </li>
                  <li>
                    <a href="/programa">PROGRAMA</a>
                  </li>
                  <li>
                    <a href="/">MAPA</a>
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
      <Participantes />
    </>
  );
};
export default Home;
