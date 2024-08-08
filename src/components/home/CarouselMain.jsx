
import { Carousel } from "flowbite-react";
import carrucel1 from "../../assets/images/carousel/carrucel1.jpg";
import carrucel2 from "../../assets/images/carousel/carrucel2.jpg";
import carrucel3 from "../../assets/images/carousel/carrucel3.jpg";



const CarouselCustomTheme = {
  scrollContainer: {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    "snap": "snap-x"
  }
}
function CarouselMain() {
  return (
    <div className="h-40 sm:h-64 xl:h-[80vh] relative">
      <Carousel slideInterval={3000} theme={CarouselCustomTheme}>
        <img src={carrucel1} alt="imagen feria de huancaro" className="object-cover h-full"/>
        <img src={carrucel2} alt="imagen feria de huancaro" className="object-cover h-full"/>
        <img src={carrucel3} alt="imagen feria de huancaro" className="object-cover h-full"/>
        
        
      </Carousel>
      {/* <div className="absolute bottom-10 lg:top-[35%] xl:top-[35%] right-16 lg:right-[12%] text-white hidden md:block ">
        <h4 className="text-xl md:text-4xl lg:text-6xl font-midnight font-normal">CHINCHERO</h4>
        <h4 className="text-xl md:text-4xl lg:text-6xl font-midnight font-normal">te Espera!</h4>
      </div> */}
    </div>
  );
}

export default CarouselMain;
