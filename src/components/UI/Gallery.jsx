import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import limatambo1 from "../../assets/images/limatambo/limatambo1.jpg";
import limatambo2 from "../../assets/images/limatambo/limatambo2.jpg";
import limatambo3 from "../../assets/images/limatambo/limatambo3.jpg";
import limatambo4 from "../../assets/images/limatambo/limatambo4.jpg";
import limatambo5 from "../../assets/images/limatambo/limatambo5.jpg";
import limatambo6 from "../../assets/images/limatambo/limatambo6.jpg";

const GalleryFoto = () => (
  <section>
    <h3 className="text-center">Galería de Fotos</h3>
    <Gallery>
      <div className="flex flex-col md:flex-row w-10/12 mx-auto gap-12 mb-8">
        <div className="flex-1">
          <Item original={limatambo1} width="1024" height="600">
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={limatambo1}
                className=" object-cover h-full rounded-lg cursor-pointer hover:scale-105"
              />
            )}
          </Item>
        </div>
        <div className="flex-1">
          <Item original={limatambo2} width="1024" height="600">
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={limatambo2}
                className=" object-cover h-full rounded-lg cursor-pointer hover:scale-105"
              />
            )}
          </Item>
        </div>
        <div className="flex-1">
          <Item original={limatambo3} width="1024" height="600">
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={limatambo3}
                className=" object-cover h-full rounded-lg cursor-pointer hover:scale-105"
              />
            )}
          </Item>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-10/12 mx-auto gap-12">
        <div className="flex-1">
          <Item original={limatambo4} width="1024" height="600">
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={limatambo4}
                className=" object-cover h-full rounded-lg cursor-pointer hover:scale-105"
              />
            )}
          </Item>
        </div>
        <div className="flex-1">
          <Item original={limatambo5} width="1024" height="600">
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={limatambo5}
                className=" object-cover h-full rounded-lg cursor-pointer hover:scale-105"
              />
            )}
          </Item>
        </div>
        <div className="flex-1">
          <Item original={limatambo6} width="1024" height="600">
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={limatambo6}
                className=" object-cover h-full rounded-lg cursor-pointer hover:scale-105"
              />
            )}
          </Item>
        </div>
      </div>
      
    </Gallery>
  </section>
);
export default GalleryFoto;
