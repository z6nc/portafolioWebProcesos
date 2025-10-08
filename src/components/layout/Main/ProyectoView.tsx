import { ListaProyectos } from "../../../data/proyectos";
import { Minibutton } from "../../common/minibutton/minibutton";
import { Link } from "react-router-dom";
import VideoPlayer from "../../common/VideoPlayer";
import { IconArrowSquare } from "../../icons/iconArrow";
interface ProjectViewerProps {
  proyectoId: string;
}

const ProyectoViewer = ({ proyectoId }: ProjectViewerProps) => {
  const FindProyecto = ListaProyectos.find((ls) => ls.id === proyectoId)
  if (!FindProyecto) return "no hay"  // crear cuando se escriba mal

  return (
    <section className="max-w-5xl mx-auto bg-white min-h-screen p-9 lg:p-16 flex flex-col gap-4 ">
      <Link to="/" className="text-sm text-blue-500 hover:underline mb-4">← Volver al Inicio</Link>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{FindProyecto?.nombreProyecto}</h1>
        <a href={FindProyecto?.link} className="hover:-translate-y-2 transition-transform" target="_blank" rel="noopener noreferrer">
          <IconArrowSquare />
        </a>
      </div>
      <p className="text-base text-parrafos">{FindProyecto?.informacionExtendida}</p>



      <span className="text-gray-600 italic bg-gray-50 p-2 border-l-4 border-yellow-500">{FindProyecto?.datoImportante || FindProyecto?.datoAviso}</span>
      <VideoPlayer url="https://res.cloudinary.com/dleem7osr/video/upload/v1740675379/videoWeatherApp_ncqbj8.mp4" />
      <div>
        {FindProyecto?.Preguntas && (
          <>
            <div className="space-y-4">
              {FindProyecto.Preguntas.map((item, index) => (
                <div key={index} className=" pb-2">
                  <h3 className="text-base font-medium">{item.pregunta}</h3>
                  <p className="text-parrafos ">{item.respuesta}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-y-3">
        <h2 className="text-base font-medium">Herramientas Utilizadas</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          {FindProyecto?.tecnologias.map((tec) => (
            <Minibutton key={tec} texto={tec} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProyectoViewer;
