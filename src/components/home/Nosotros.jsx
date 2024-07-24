import { useScrollTop } from "../../hooks/useScrollTop"


import Camelidos from "../../assets/images/camelidos/Camelidos.jpeg";
import logo_camelidos_2 from "../../assets/images/camelidos/logo_camelidos_2.webp";
import año_camelidos from "../../assets/images/camelidos/año_camelidos.jpg";
import hagamos_historia_rojo from "../../assets/images/logos/hagamos_historia_rojo.png";
import galeria1 from "../../assets/images/camelidos/galeria/galeria1.jpg";
import galeri4 from "../../assets/images/camelidos/galeria/galeri4.jpg";
import galeria3 from "../../assets/images/camelidos/galeria/galeria3.jpeg";

const Nosotros = () => {
    useScrollTop();

    return (
        
            <div className="">
                <section className="container mx-auto ">
                    <div className="flex flex-col lg:flex-row sm:items-center">
                        <div className="flex-1">
                            <img
                                src={Camelidos}
                                alt="promocion Expo Cusco Huancaro 2024"
                                className="object-cover w-full p-20"
                               
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-primary text-center">
                                Festicamelidos 2024
                            </h1>
                            <p className="text-justify text-lg px-2 sm:px-5">
                            Bienvenidos al Festival de Camélidos de Cusco, 
                            un evento anual que celebra la rica tradición y 
                            cultura relacionada con los camélidos en nuestra 
                            región. Desde su inicio, nuestro festival ha sido 
                            un punto de encuentro para amantes de los animales, 
                            agricultores, artesanos y todos aquellos interesados 
                            en las prácticas culturales y agrícolas ancestrales.
                            Estamos comprometidos con la sostenibilidad y el bienestar 
                            de los camélidos, promoviendo prácticas de cría responsables 
                            y el respeto por estos animales. Además, trabajamos en 
                            colaboración con organizaciones locales para asegurar 
                            que el festival tenga un impacto positivo en la 
                            comunidad, fomentando el desarrollo económico y cultural.
                            </p>
                        </div>
                        
                    </div>
                    
                </section>
                <section className="py-10 bg-concrete-50 text-lg ">
                    <div className="w-[85%] mx-auto flex flex-col-reverse md:flex-row px-5 gap-x-5 md:items-center">
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-primary">Mision</h3>
                            <p className="text-justify text-gray-700">
                            En el Festival de Camélidos, nuestra misión es 
                            preservar y promover las tradiciones y conocimientos 
                            relacionados con los camélidos, animales que han sido 
                            fundamentales para la vida y la economía de nuestra 
                            región durante siglos. Nos esforzamos por educar al 
                            público sobre la importancia de estos animales en nuestra 
                            historia y cultura, y al mismo tiempo, ofrecer una plataforma 
                            para el intercambio cultural y comercial.
                            </p>
                            
                            
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-center">
                                <img
                                    src={logo_camelidos_2}
                                    alt=""
                                    className="object-cover w-[50vh] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-10 bg-concrete-50 text-lg ">
                    <div className="w-[85%] mx-auto flex flex-col-reverse md:flex-row px-5 gap-x-5 md:items-center">
                        <div className="flex-1">
                            <div className="flex justify-center">
                                <img
                                    src={año_camelidos}
                                    alt=""
                                    className="object-cover w-[50vh] h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-primary">Vision</h3>
                            <p className="text-justify text-gray-700">
                            Nuestra visión es convertir el Festival de Camélidos 
                            de Cusco en un referente cultural y turístico a nivel 
                            nacional e internacional, promoviendo y preservando 
                            la rica herencia cultural y económica asociada 
                            con los camélidos andinos. Aspiramos a crear 
                            un espacio inclusivo y educativo donde se celebren 
                            y se destaquen las tradiciones ancestrales, la innovación 
                            en el manejo y aprovechamiento de estos animales, y su 
                            importancia en la sostenibilidad ambiental y el desarrollo rural.
                            </p>
                        </div>
                        
                    </div>
                </section>
                <section className="w-full container mx-auto mt-8">
                    <div className="w-full flex justify-center">
                        <div className="flex justify-center gap-2 md:gap-10 w-full md:w-4/6">
                            
                            <div className="flex-1">
                                <img
                                    src={hagamos_historia_rojo}
                                    alt="Logo hagamos historia Gobierno Regional del Cusco"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-center text-primary">
                            Galeria de fotos 
                        </h2>
                       {/*  <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_1.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_2.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src="/images/gallery/imagen_feria_3.webp"
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            
                        </div> */}
                        <div className="flex flex-col md:flex-row gap-8 mt-8">
                            <div className="flex-1">
                                <img
                                    src={galeria1}
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src={galeri4}
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            <div className="flex-1">
                                <img
                                    src={galeria3}
                                    alt="Galeria de fotos 2023"
                                    className=""
                                />
                            </div>
                            
                        </div>
                    </div>
                </section>
                {/*<MunisLogos />*/}
            </div>

    );
};
export default Nosotros;
