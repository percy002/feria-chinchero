import reglamento from "../assets/docs/reglamento.pdf"

const Programa = () => {
  return (
    <div className="h-screen relative pt-16 bg-concrete-50">
      <div className="my-12 absolute w-full h-[85vh] ">
        <iframe src={reglamento} frameborder="0" className="border-0 w-4/5 h-full mx-auto"></iframe>
      </div>
    </div>
  )
}
export default Programa