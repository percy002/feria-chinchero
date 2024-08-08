import noticias1 from "../../assets/images/noticias/carreraburros.jpg";
import noticias2 from "../../assets/images/noticias/PlatoTipico.jpg";
import noticias3 from "../../assets/images/noticias/CorridaToros.webp";
const Noticias = () => {
  return (
    <section className="noticias">
      <div className="container mx-auto">
        <div className="blog-seccion">
          <div className="titulo">
            <h2>Eventos Programados</h2>
            <h3>Del viernes 26 hasta el domingo 28 de julio</h3>
          </div>
          <div className="cards">
            <div className="card">
              <div className="imagen-seccion">
                <img src={noticias1} alt="" />
              </div>
              <div className="contenido">
                <h4 className="text-pretty">Gran Carrera de Burros</h4>
                <p class="text-justify">
                ¡Bienvenidos a la emocionante 
                carrera de burros! Desde tiempos inmemoriales, 
                los burros han sido compañeros fieles del hombre, 
                conocidos por su resistencia y carácter apacible. 
                En esta carrera, estos nobles animales muestran su velocidad y 
                agilidad en un recorrido lleno de adrenalina y entretenimiento.
                </p>
                {/* <a href="">Leer Mas...</a> */}
              </div>
              {/* <div className="dia">
                <p>Julio 07, 2024</p>
              </div> */}
            </div>
            <div className="card">
              <div className="imagen-seccion">
                <img src={noticias2} alt="" />
              </div>
              <div className="contenido">
                <h4>Gastronomia Tipica</h4>
                <p class="text-justify">
                En la Feria regional Chinchero, nuestra 
                gastronomía no solo alimenta el cuerpo, 
                sino que también celebra la historia y la 
                cultura de nuestra tierra. Únete a nosotros 
                para disfrutar de una experiencia culinaria 
                única que te transportará a través de sabores auténticos y 
                creaciones vanguardistas en cada bocado. 
                </p>
                {/* <a href="">Leer Mas...</a> */}
              </div>
              {/* <div className="dia">
                <p>Junio 20, 2024</p>
              </div> */}
            </div>
            <div className="card">
              <div className="imagen-seccion">
                <img src={noticias3} alt="" />
              </div>
              <div className="contenido">
                <h4>Corrida de Toros</h4>
                <p class="text-justify">
                La corrida de toros en Chinchero es 
                una oportunidad para presenciar el arte y 
                la habilidad de los toreros mientras desafían 
                a estos majestuosos animales. Es un espectáculo 
                que combina la emoción del enfrentamiento con la 
                gracia y la técnica de los participantes.
                </p>
                {/* <a href="">Leer Mas...</a> */}
              </div>
              {/* <div className="dia">
                <p>Junio 20, 2024</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Noticias;
