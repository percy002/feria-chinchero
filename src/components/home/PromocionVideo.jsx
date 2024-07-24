import videoChinchero from "../../assets/videos/video_chinchero.mp4";
import logoFeriaChinchero from "../../assets/images/logos/logo_feria_regional_cuadrado.png";

const PromocionVideo = () => {
  return (
    <section className="py-10 bg-[#734524] bg-opacity-70 text-xl">
      <div className="w-[85%] mx-auto flex flex-col-reverse xl:flex-row px-5 gap-x-10 gap-y-8 md:items-center ">
        <div className="flex-1">
          <div className="flex justify-center">
            <video
              src={videoChinchero}
              className="w-full mx-auto aspect-video"
              controls
              poster={logoFeriaChinchero}
            ></video>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-white">Video</h2>
          <p className="text-pretty text-white">
            En el marco del mes jubilar de las fiestas patrias, se lleva a cabo
            una serie de eventos protocolares, artísticos y culturales, los
            mismos que revaloran, preservan y difunden las tradiciones
            culturales del País. En este contexto también se ha llevado a cabo
            desde hace más de 20 años, la Gran “Feria Regional Chinchero 2024”,
            que es un evento muy esperado por la población cusqueña y reconocida
            a nivel nacional e internacional, la misma que se desarrolla en el
            mes de julio.
          </p>
          <p className="text-pretty text-white">
            La “Feria Regional Chinchero 2024” se ha convertido en una verdadera
            vitrina de exhibición para productos diversos que son
            comercializados en el mercado regional. “La vitrina que ofrecemos es
            diversa. “Feria Regional Chinchero 2024” surgió no solo con el afán
            de propiciar un espacio de entretenimiento familiar, sino también
            para dar alternativas económicas a productores y consumidores”.
          </p>
        </div>
      </div>
    </section>
  );
};
export default PromocionVideo;
