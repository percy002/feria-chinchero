import galeria1 from "../../assets/images/camelidos/galeria/galeria1.jpg";
import galeria2 from "../../assets/images/camelidos/galeria/galeria2.jpeg";
import galeria3 from "../../assets/images/camelidos/galeria/galeria3.jpeg";
import Header from "../UI/Header";
import logoFeriaChinchero from "../../assets/images/logos/logo_feria_regional_cuadrado.png";

const Nosotros = () => {
  return (
    <div className="">
      <Header
        titleHeader={"Acerca de Nosotros"}
        contentHeader={"Conoce mejor nuestra historia."}
      />
      <section className="px-4 md:px-12 py-4">
        <div className="flex flex-col lg:flex-row gap-y-4">
          <div className="flex-1 flex justify-center items-center">
            <div className="text-primary ">
              <h3 className="text-center leading-none mb-0">Feria Regional</h3>
              <p className="text-center font-bold text-base leading-5">
                CHINCHERO
              </p>
              <p className="text-center font-bold text-base leading-5">2024</p>
              <p className="text-gray-700 text-pretty text-xl py-4">
                La XX FERIA REGIONAL Y XXXV FERIA AGROPECUARIA AGROINDUSTRIAL,
                ARTESANAL Y CULTURAL - CHINCHERO 2024, tiene como objetivo de
                contribuir, promocionar articular la comercialización de la
                producción ligados a los ejes temáticos en ganadería,
                agricultura, agroindustria, artesanía, gastronomía, tecnológica,
                industria y cultural a nivel regional con proyección nacional e
                internacional; generan mucha información en poco tiempo siendo
                una excelente manera de tomar el pulso al mercado, de conocer
                tendencias actuales y futuras. Fomentando el intercambio
                tecnológico, las transacciones comerciales y el establecimiento
                de redes entre productores, distribuidores, consumidores y entre
                sus participantes bajo la dirección del comité organizador.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex justify-center w-8/12">
              <img
                src={logoFeriaChinchero}
                alt=""
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* galeria de fotos */}
      <section className="px-4 md:px-12 py-4">
        <h3 className="text-center text-primary">Galería de Fotos</h3>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria1} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria2} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <img src={galeria3} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Nosotros;
