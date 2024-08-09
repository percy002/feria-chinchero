

import logoLimatambo from "../../assets/images/logos/logo_limatambo_color.png";
import logoEconomico from "../../assets/images/logos/logo_economico.jpg";

import logoGore from "../../assets/images/logos/logo_gore_cusco.png";
import logoGerepro from "../../assets/images/logos/gerepro.png";

const Participantes = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-col items-center">
        <h2 className="text-primary">Organizan:</h2>
        <div className="flex flex-col md:flex-row md:items-center ">
          <img
            src={logoLimatambo}
            alt="logo municipalidad distrital de Chinchero"
            className="h-44 object-contain"
          />
          <img
            src={logoEconomico}
            alt="logo municipalidad distrital de Chinchero"
            className="h-28 px-2 md:px-0 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-primary">Colaboran:</h2>
        <div className="flex w-8/12 mx-auto justify-around flex-col md:flex-row md:items-end gap-y-6 ">
          <img
            src={logoGore}
            alt="Logo Gobierno Regional del Cusco"
            className="h-28 object-contain"
          />
          <img
            src={logoGerepro}
            alt="Logo Gerencia Regional de Producción"
            className="h-20 object-contain"
          />
        </div>
      </div>
      {/* <div className="w-[85%] mx-auto ">
        <h2 className="text-center text-primary">Auspician</h2>
        <div className="flex flex-col">
          <div className="flex justify-around gap-1 lg:gap-24">
            <div className="flex items-center">
              <img src={logoUrubamba} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={geragri} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={logoSedaCusco} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={logoCBC} alt="" className="w-full" />
            </div>
            <div className="flex items-center">
              <img src={gercetur} alt="" className="w-full" />
            </div>
          </div>
          <div className="flex justify-around gap-1 lg:gap-8 w-full sm:w-5/6 mx-auto">
            <div className=" flex items-center justify-center">
              <img src={logoGuamanPoma} alt="" className="w-1/2" />
            </div>
            <div className=" flex items-center justify-center">
              <img src={LogoCajaCusco} alt="" className="w-full" />
            </div>
            <div className=" flex items-center justify-center">
              <img src={logoAndes} alt="" className="w-1/2" />
            </div>

            <div className=" flex items-center justify-center">
              <img src={logoApdayc} alt="" className="w-1/2" />
            </div>
            
            <div className=" flex items-center justify-center">
              <img src={logoGerepro} alt="" height={280} width={280} />
            </div>
          </div>
          <div className="flex justify-center">
            <img src={logoConsorcio} alt="" className="w-5/6 sm:w-1/3" />
          </div>
        </div>
      </div> */}
    </section>
  );
};
export default Participantes;
