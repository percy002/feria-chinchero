import reglamento from "../assets/docs/reglamento.pdf"
import { useScrollTop } from "../hooks/useScrollTop";
import Header from "../components/UI/Header";
const Reglamento = () => {
  useScrollTop();
  return (
    <>
      <Header
        titleHeader={"Reglamento"}
        contentHeader={"Descarga nuestro reglamento"}
      />
      <div className="h-screen relative pt-16 bg-concrete-50">
        <div className="my-12 absolute w-full h-[85vh] ">
          <iframe
            src={reglamento}
            frameborder="0"
            className="border-0 w-4/5 h-full mx-auto"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default Reglamento;
