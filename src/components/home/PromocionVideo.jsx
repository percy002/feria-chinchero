import logoFeriaChinchero from "../../assets/images/logos/logo_feria_regional_cuadrado.png";

const PromocionVideo = () => {
  return (
    <section className="py-10 bg-[#734524] bg-opacity-70 text-xs sm:text-base">
      <div className="w-[85%] mx-auto flex flex-col-reverse lg:flex-row px-5 gap-x-10 gap-y-8 ">
        <div className="flex-1">
          <div className="flex h-full justify-center">
            <iframe
              className="w-full h-[330px]  object-cover"
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmunilimatambo2326%2Fvideos%2F1529750544596257%2F&width=650&show_text=false&appId"
              width="650"
              height="0"
              style={{ border: "none", overflow: "hidden" }}
              allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-white">Video Promocional</h2>
          <p className="text-pretty text-white">
            ¡10 Y 11 DE AGOSTO! EXPOFERIA REGIONAL LIMATAMBO 2024 Lo mejor de la
            producción agropecuaria de la provincia de Anta, la región y del sur
            del país en la II Expoferia Regional, Agropecuaria, Agroindustrial,
            Artesanal, Gastronómica y Turística, Limatambo 2024. ¡Ven con toda
            tu familia, te esperamos el sábado 10 y domingo11 de agosto!, ¡NO TE
            LO PIERDAS...!
          </p>
        </div>
      </div>
    </section>
  );
};
export default PromocionVideo;
