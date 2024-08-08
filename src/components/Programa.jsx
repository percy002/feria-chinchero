import programa from "../assets/docs/programa.pdf";
import { useScrollTop } from "../hooks/useScrollTop";
import Header from "../components/UI/Header";
const Programa = () => {
  useScrollTop();

  return (
    <>
      <Header
        titleHeader={"PROGRAMA"}
        contentHeader={"Descarga nuestro programa"}
      />
      <div className="h-screen relative pt-16 bg-concrete-50">
        <div className="my-12 absolute w-full h-[85vh] ">
          <iframe
            src={programa}
            frameborder="0"
            className="border-0 w-4/5 h-full mx-auto"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default Programa;
