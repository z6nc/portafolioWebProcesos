import { ListaProyectos } from "../../../data/proyectos";
interface ProjectViewerProps {
  proyectoId: string;
}

const ProjectViewer = ({ proyectoId }: ProjectViewerProps) => {
  const FindProyecto = ListaProyectos.find((ls)=> ls.nombreProyecto === proyectoId )
   if(!FindProyecto) return "no hay"  // crear cuando se escriba mal

  return (
    <div className="max-w-prose mx-auto py-20">
      <div>
        <h1 className="text-3xl font-bold">{FindProyecto?.nombreProyecto}</h1>
        <p>{FindProyecto?.informacion}</p>
        <div>
          <h2>Tecnologias</h2>
        </div>
        <h2>{FindProyecto?.url}</h2>

      </div>
    </div>
  );
};

export default ProjectViewer;
