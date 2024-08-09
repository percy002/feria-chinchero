import slogan from "../../assets/images/logos/logo_slogan_gore.png";
import logoLimatambo from "../../assets/images/logos/logo_limatambo_color.png";

const Header = ({contentHeader,titleHeader}) => {
  return (
    <section>
      <div className="bg-fondo-limatambo bg-cover bg-top w-full h-fit">
        <div className="w-full flex gap-4 md:gap-16 justify-between md:justify-center px-4 md:px-14 md:py-8">
          <div className="flex items-center">
            <img
              src={slogan}
              alt="logo gobierno regional del cusco"
              className="w-56 md:w-[10rem] lg:w-[15rem] object-cover"
            />
          </div>
          
          <div className="flex items-center">
            <img
              src={logoLimatambo}
              alt="logo Internacional Camelidos"
              className="w-72 md:w-[10rem] lg:w-[20rem] object-cover"
            />
          </div>
        </div>
        <div className="bg-black-40 flex justify-center py-4">
          <div className="">
            <h3 className="text-center text-white">{titleHeader}</h3>
            <p className="text-center text-xl font-medium text-white">{contentHeader}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
