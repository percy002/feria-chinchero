import logoFeria from "../../assets/images/logos/logo_feria.png";

const Resena = () => {
  return (
    <section className="py-5 bg-concrete-50 text-xs sm:text-base ">
      <div className="w-[85%] mx-auto flex flex-col-reverse lg:flex-row px-5 gap-x-5 lg:items-center">
        <div className="flex-1 flex flex-col">
          <h2 className="text-primary">Acerca de la Feria</h2>
          <p className="text-justify text-gray-700">
            La Municipalidad Distrital de Limatambo, comunidades campesinas del
            Distrito, Anexos, Asociaciones de criadores del Distrito y el Comité
            Organizador. de la “II EXPO FERIA REGIONAL AGROPECUARIO,
            AGROINDUSTRIAL ARTESANAL, GASTRONOMICA Y TURISTICA LIMATAMBO 2024.”,
            se complacen en invitar al público en general a visitar y presenciar
            la exposición y venta de lo mejor de la producción y crianza de
            animales menores y mayores, misma que se hace en conmemoración del
            aniversario y la fiesta patronal de nuestro distrito de Limatambo.
            Estamos seguros de contar con la presencia de los mejores
            productores de nuestro Distrito, Provincia y Región del Cusco,
            siendo parte de cada de una de las actividades programadas de este
            magno evento agropecuario, como es la exposición y juzgamiento de
            animales mayores y menores, remate al martillo, exposición y venta
            de artesanías, derivados lácteos, concurso de producción y ordeño de
            leche, concurso y venta de platos típicos, presentaciones
            artísticas, etc.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex justify-center w-11/12">
            <img
              src={logoFeria}
              alt=""
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resena;
