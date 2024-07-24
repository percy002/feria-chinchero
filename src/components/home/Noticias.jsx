import noticias1 from "../../assets/images/noticias/lanzamiento_c.webp";
import noticias2 from "../../assets/images/paginaPrincipal/noticias2.jpg";
import noticias3 from "../../assets/images/paginaPrincipal/noticias3.jpg";
const Noticias = () => {
  return (
    <section className="noticias">
      <div className="container mx-auto">
        <div className="blog-seccion">
          <div className="titulo">
            <h2>Eventos y Noticias</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="imagen-seccion">
                <img src={noticias1} alt="" />
              </div>
              <div className="contenido">
                <h4 className="text-pretty">Titulo 1</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident porro fugit distinctio dolore culpa rem sint est
                  labore magni facere officia aut, fugiat sunt modi veritatis
                  hic error ullam. Ut.
                </p>
                <a href="">Leer Mas...</a>
              </div>
              <div className="dia">
                <p>Julio 07, 2024</p>
              </div>
            </div>
            <div className="card">
              <div className="imagen-seccion">
                <img src={noticias2} alt="" />
              </div>
              <div className="contenido">
                <h4>Titulo 2</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident porro fugit distinctio dolore culpa rem sint est
                  labore magni facere officia aut, fugiat sunt modi veritatis
                  hic error ullam. Ut.
                </p>
                <a href="">Leer Mas...</a>
              </div>
              <div className="dia">
                <p>Junio 20, 2024</p>
              </div>
            </div>
            <div className="card">
              <div className="imagen-seccion">
                <img src={noticias3} alt="" />
              </div>
              <div className="contenido">
                <h4>Titulo 3</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident porro fugit distinctio dolore culpa rem sint est
                  labore magni facere officia aut, fugiat sunt modi veritatis
                  hic error ullam. Ut.
                </p>
                <a href="">Leer Mas...</a>
              </div>
              <div className="dia">
                <p>Junio 20, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Noticias;
