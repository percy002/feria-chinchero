import logoFeriaChinchero from "../../assets/images/logos/logo_feria_regional_cuadrado.png";

const Resena = () => {
  return (
    <section className="py-5 bg-concrete-50 text-xl ">
      <div className="w-[85%] mx-auto flex flex-col-reverse md:flex-row px-5 gap-x-5 md:items-center">
        <div className="flex-1 flex flex-col">
          <h2 className="text-primary">Reseña</h2>
          <p className="text-justify text-gray-700">
            La XX FERIA REGIONAL Y XXXV FERIA AGROPECUARIA AGROINDUSTRIAL,
            ARTESANAL Y CULTURAL - CHINCHERO 2024, tiene como objetivo de
            contribuir, promocionar articular la comercialización de la
            producción ligados a los ejes temáticos en ganadería, agricultura,
            agroindustria, artesanía, gastronomía, tecnológica, industria y
            cultural a nivel regional con proyección nacional e internacional;
            generan mucha información en poco tiempo siendo una excelente manera
            de tomar el pulso al mercado, de conocer tendencias actuales y
            futuras. Fomentando el intercambio tecnológico, las transacciones
            comerciales y el establecimiento de redes entre productores,
            distribuidores, consumidores y entre sus participantes bajo la
            dirección del comité organizador.
          </p>
          {/* <Link href="/informacion_general" className="bg-primary rounded-full text-white w-fit mt-4 px-4 py-1 border-4 hover:border-primary hover:bg-white hover:text-primary">
                            Leer Mas
                        </Link> */}
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex justify-center w-11/12">
            <img
              src={logoFeriaChinchero}
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
