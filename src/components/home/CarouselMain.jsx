
import { Carousel } from "flowbite-react";
import camelidos1 from "../../assets/images/camelidos/carousel/camelidos1.jpg";
import camelidos2 from "../../assets/images/camelidos/carousel/camelidos2.jpg";
import camelidos4 from "../../assets/images/camelidos/carousel/camelidos4.jpg";

const CarouselCustomTheme = {
  scrollContainer: {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    "snap": "snap-x"
  }
}
function CarouselMain() {
  return (
    <div className="h-40 sm:h-64 xl:h-[70vh] relative">
      <Carousel slideInterval={4000} theme={CarouselCustomTheme}>
        <img src={camelidos1} alt="imagen feria de huancaro" className="object-cover h-full w-auto"/>
        <img src={camelidos2} alt="imagen feria de huancaro" className="object-cover h-full w-auto"/>
        <img src={camelidos4} alt="imagen feria de huancaro" className="object-cover h-full w-auto"/>
        
        
      </Carousel>
      <div className="absolute bottom-10 lg:top-[35%] xl:top-[35%] right-16 lg:right-[12%] text-white hidden md:block ">
        <h4 className="text-xl md:text-4xl lg:text-6xl font-midnight font-normal">CHINCHERO</h4>
        <h4 className="text-xl md:text-4xl lg:text-6xl font-midnight font-normal">te Espera!</h4>
      </div>
    </div>
  );
}

export default CarouselMain;
