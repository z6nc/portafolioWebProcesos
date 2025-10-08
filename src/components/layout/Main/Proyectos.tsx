import { Minibutton } from "../../common/minibutton/minibutton"
import { ListaProyectos } from "../../../data/proyectos"
export const Proyectos = () => {
    return (


        <section id="Proyectos" className="flex flex-col gap-y-6 rounded-lg p-9 overflow-hidden bg-white">
            <h3 className="font-bold text-base text-gray-400 uppercase">Proyectos</h3>

            <div className="flex flex-wrap gap-4 text-gray-500">
                {
                    [...ListaProyectos].reverse().map((proyecto) => (
                        <a
                            href={proyecto.url}
                            target="_blank"
                            className="flex flex-col w-auto md:w-xl border border-gray-200 rounded-lg p-5 md:p-9 gap-y-3 hover:shadow-lg transition-shadow duration-300"
                        >
                            <p className="text-xs ">{proyecto.Año}</p>
                            <h3 className=" text-black font-bold">{proyecto.nombreProyecto}</h3>
                            <p className="text-sm ">{proyecto.informacion}</p>
                            <span className="text-sm text-gray-300 pb-4">
                                {proyecto.datoImportante}
                            </span>
                            <div className="flex flex-wrap gap-2 text-xs">
                                {proyecto.tecnologias.map((tech) => (
                                    <Minibutton texto={tech} />
                                ))}
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>

    )
}