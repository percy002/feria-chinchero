import { Link, useLocation } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logoHistoria from "../../assets/images/paginaPrincipal/historia-footer.png";
import logoMapa from "../../assets/images/mapa/qr-mapa.png";
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row gap-y-5">
        <div className="flex-1">
          <div className="flex flex-col items-center">
            <h4 className="text-center text-white">¿Cómo llegar?</h4>
            <img src={logoMapa} alt="" className="w-1/2" />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h4 className="text-center text-white">Mas Información</h4>
          <ul className="flex flex-col text-white font-bold items-center gap-y-5">
            <li>
              <Link to="/nosotros">NOSOTROS</Link>
            </li>
            <li>
              <Link to="/programa">PROGRAMA</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <h4 className="text-center text-white">Contáctenos</h4>
          <ul className="social_icon">
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/story.php?story_fbid=1069320974741247&id=100049900642112&mibextid=oFDknk&rdid=orCuHZkV9R5WfzYq"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href=""></a>
              <FaTiktok className="h-6 w-6" />
            </li>
            <li>
              <a href=""></a>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>

      <section>
        <div className="grupo-2">
          <div className="container" id="container_Logos_Gore">
            <img
              className="logo_gore"
              src={logoHistoria}
              alt="Logo_Gobierno_Regional_Cusco"
            />
          </div>
          <div className="par2">
            <small>&copy; 2024 - Todos los Derechos Reservados.</small>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
