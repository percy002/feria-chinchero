import slogan from "../../assets/images/logos/logo_slogan_gore.png";
import logoMuniChinchero from "../../assets/images/logos/logo_muni_chinchero.png";

const Header = ({contentHeader,titleHeader}) => {
  return (
    <section>
      <div className="bg-fondo-mapi bg-cover bg-top w-full h-fit">
        <div className="w-full flex gap-4 md:gap-16 justify-between md:justify-center px-4 md:px-14 pt-32 pb-8">
          <div className="flex items-center">
            <img
              src={slogan}
              alt="logo gobierno regional del cusco"
              className="w-24 md:w-[10rem] lg:w-[15rem] object-cover"
            />
          </div>
          
          <div className="flex items-center">
            <img
              src={logoMuniChinchero}
              alt="logo Internacional Camelidos"
              className="w-24 md:w-[10rem] lg:w-[20rem] object-cover"
            />
          </div>
        </div>
        <div className="bg-black-25 flex justify-center py-4">
          <div className="">
            <h3 className="text-center text-primary">{titleHeader}</h3>
            <p className="text-center text-xl font-medium">{contentHeader}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
