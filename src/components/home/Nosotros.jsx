import galeria1 from "../../assets/images/noticias/carreraburros.jpg";
import galeria2 from "../../assets/images/noticias/PlatoTipico.jpg";
import galeria3 from "../../assets/images/noticias/CorridaToros.webp";
import Header from "../UI/Header";
import logoFeria from "../../assets/images/logos/logo_feria.png";
// import { GalleryFoto } from "../UI/GalleryFoto";
import GalleryFoto from "../UI/Gallery";
import { useScrollTop } from "../../hooks/useScrollTop";

const Nosotros = () => {
  useScrollTop();
  return (
    <div className="">
      <Header
        titleHeader={"Acerca de Nosotros"}
        contentHeader={"Conoce mejor nuestra historia."}
      />
      <section className="px-4 md:px-12 py-4">
        <div className="text-primary md:pb-8">
          <h3 className="text-center leading-none mb-0">
            II Expo Feria Regional
          </h3>
          <p className="text-center font-bold text-base leading-5">
            AGROPECUARIO, AGROINDUSTRIAL ARTESANAL, GASTRONOMICA Y TURISTICA
            LIMATAMBO
          </p>
          <p className="text-center font-bold text-base leading-5">2024</p>

        </div>
        <div className="flex flex-col lg:flex-row gap-y-4">
          <div className="flex-1 flex justify-center items-center">
            <div className="text-primary ">
              {/* <h3 className="text-center leading-none mb-0">
                II Expo Feria Regional
              </h3>
              <p className="text-center font-bold text-base leading-5">
                AGROPECUARIO, AGROINDUSTRIAL ARTESANAL, GASTRONOMICA Y TURISTICA
                LIMATAMBO
              </p>
              <p className="text-center font-bold text-base leading-5">2024</p> */}
              <p className="text-gray-700 text-pretty text-sm md:text-base py-4">
                La Municipalidad Distrital de Limatambo, comunidades campesinas
                del Distrito, Anexos, Asociaciones de criadores del Distrito y
                el Comité Organizador. de la “II EXPO FERIA REGIONAL
                AGROPECUARIO, AGROINDUSTRIAL ARTESANAL, GASTRONOMICA Y TURISTICA
                LIMATAMBO 2024.”, se complacen en invitar al público en general
                a visitar y presenciar la exposición y venta de lo mejor de la
                producción y crianza de animales menores y mayores, misma que se
                hace en conmemoración del aniversario y la fiesta patronal de
                nuestro distrito de Limatambo.
              </p>
              <p className="text-gray-700 text-pretty text-sm md:text-base py-4">
                Estamos seguros de contar con la presencia de los mejores
                productores de nuestro Distrito, Provincia y Región del Cusco,
                siendo parte de cada de una de las actividades programadas de
                este magno evento agropecuario, como es la exposición y
                juzgamiento de animales mayores y menores, remate al martillo,
                exposición y venta de artesanías, derivados lácteos, concurso de
                producción y ordeño de leche, concurso y venta de platos
                típicos, presentaciones artísticas, etc.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex justify-center w-11/12">
              <img
                src={logoFeria}
                alt=""
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-gray-700 text-pretty text-sm md:text-base py-4">
            El objetivo de la “II EXPO FERIA REGIONAL AGROPECUARIO,
            AGROINDUSTRIAL ARTESANAL, GASTRONOMICA Y TURISTICA LIMATAMBO 2024.”,
            al ser de nivel regional, es promover la participación de los
            productores y criadores del ámbito de la región del Cusco, apreciar
            el avance del mejoramiento genético de sus crianzas y calidad de la
            producción, así como también la articulación a los mercados de la
            Región y exponer las expresiones culturales del distrito de
            Limatambo, que aún preserva su mega diversidad natural y cultural.
          </p>
        </div>
      </section>
      {/* galeria de fotos */}

      {/* <GalleryFoto/> */}
      <GalleryFoto />
    </div>
  );
};
export default Nosotros;
