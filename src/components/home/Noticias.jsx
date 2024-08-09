import noticias1 from "../../assets/images/limatambo/limatambo1.jpg";
import noticias2 from "../../assets/images/limatambo/limatambo3.jpg";
import { List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
const Noticias = () => {
  return (
    <section className="noticias">
      <div className="container mx-auto">
        <div className="blog-seccion">
          <div className="">
            <h2>Eventos Programados</h2>
            <h3 className="text-center">Sábado 10 y Domingo 11 de Agosto</h3>
          </div>
          <div className="flex flex-col gap-x-36  md:flex-row ">
            <div className="flex-1">
              <div className="imagen-seccion flex justify-center">
                <img src={noticias1} alt="" />
              </div>
              <div className="contenido">
                <h4 className="text-pretty text-center">10 de Agosto</h4>
                <List className="text-black">
                  <List.Item icon={HiCheckCircle}>
                    Concurso de Ordeño  
                  </List.Item>
                  <List.Item icon={HiCheckCircle}>
                    Juzgamiento de ganado lechero
                  </List.Item>
                  <List.Item icon={HiCheckCircle}>
                    Juzgamiento de cuyes tipo 1
                  </List.Item>
                  <List.Item icon={HiCheckCircle}>
                    Concurso apícola
                  </List.Item>
                  <List.Item icon={HiCheckCircle}>
                    Concurso de derivados lácteos
                  </List.Item>
                </List>
                
              </div>
              
            </div>
            <div className="flex-1">
              <div className="imagen-seccion flex justify-center">
                <img src={noticias2} alt="" />
              </div>
              <div className="contenido">
                <h4 className="text-pretty text-center">11 de Agosto</h4>
                <List className="text-black">
                  <List.Item icon={HiCheckCircle}>
                    Concurso de productos agrícolas  
                  </List.Item>
                  <List.Item icon={HiCheckCircle}>
                    Juzgamiento de ovinos
                  </List.Item>
                  <List.Item icon={HiCheckCircle}>
                    Concurso de gastronomía
                  </List.Item>
                  <List.Item icon={HiCheckCircle}>
                    Concurso de artesanía
                  </List.Item>
                  <List.Item icon={HiCheckCircle}>
                    Juzgamiento de vacuno y remate a martillo de toros
                    engordados
                  </List.Item>
                </List>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Noticias;
