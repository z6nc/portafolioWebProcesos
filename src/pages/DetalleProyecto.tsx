import { useParams } from "react-router-dom";
import ProyectoViewer from "../components/layout/Main/ProyectoView";

export default function DetalleProyecto() {
    const { id } = useParams<{ id: string }>();
    if (!id) return <div className="">⚠️ ID de proyecto no proporcionado.</div>;
    return <ProyectoViewer proyectoId={id} />;
}


