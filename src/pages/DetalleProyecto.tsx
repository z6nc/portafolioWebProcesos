import { useParams } from "react-router-dom";
import ProjectViewer from "../components/layout/Main/ProyectoView";

export default function DetalleProyecto() {
    const { id } = useParams<{ id: string }>();
    if (!id) return <div className="p-4">⚠️ ID de proyecto no proporcionado.</div>;
    return <ProjectViewer proyectoId={id} />;
}


