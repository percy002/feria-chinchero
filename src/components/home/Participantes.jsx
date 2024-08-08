import desarrolloAgrario from "../../assets/images/logos/desarrollo_agrario.png";
import desarrolloEconomico from "../../assets/images/logos/desarrollo_economico.png";
import alpacasCusco from "../../assets/images/logos/alpacas_cusco.png";
import gercetur from "../../assets/images/logos/logoGercetur.png";
import gerepro from "../../assets/images/logos/gerepro.png";
import geragri from "../../assets/images/logos/geragri.png";
import agropecuaria from "../../assets/images/logos/agropecuaria.png";
import agrorural from "../../assets/images/logos/agrorural.png";
import senasa from "../../assets/images/logos/senasa.png";
import escudo from "../../assets/images/logos/escudo.png";
import inves from "../../assets/images/logos/inves.png";
import grismpv from "../../assets/images/logos/grismpv.png";
import unsaac from "../../assets/images/logos/unsaac.png";
import minpro from "../../assets/images/logos/ministerio_de_la_produccion.png";

import logoChinchero from "../../assets/images/logos/logo_chinchero_png.png";
import logoUrubamba from "../../assets/images/logos/urubamba.png";
import logoSedaCusco from "../../assets/images/logos/logo_sedacusco.png";
import logoCBC from "../../assets/images/logos/cbc.png";
import logoGuamanPoma from "../../assets/images/logos/logoGuamanpoma.png";
import LogoCajaCusco from "../../assets/images/logos/logoCajaCusco.png";
import logoAndes from "../../assets/images/logos/logoLosAndes.png";
import logoConsorcio from "../../assets/images/logos/consorcio.jpg";
import logoApdayc from "../../assets/images/logos/logoApdayc.png";
import logoGerepro from "../../assets/images/logos/gerepro.png";

const Participantes = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-col items-center">
        <h2 className="text-primary">Organiza</h2>
        <div className="flex items-center">
          <img
            src={logoChinchero}
            alt="logo municipalidad distrital de Chinchero"
            className="w-48 h-auto"
          />
        </div>
      </div>
      <div className="w-[85%] mx-auto ">
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
      </div>
    </section>
  );
};
export default Participantes;
