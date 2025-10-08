import { ExperienciaLaboral } from "../../../data/experiencia"
import { Minibutton } from "../../common/minibutton/minibutton"
export const Experiencia = () => {
    return (
        <section
            id="Experiencia"
            className="flex flex-col gap-y-8 p-9 bg-white rounded-lg "
        >
            <h3 className="font-bold text-base text-gray-400 uppercase">Experiencia</h3>
            <div className="flex flex-col gap-y-24 text-sm text-gray-500 space-y-4">
                {
                    ExperienciaLaboral.map((experiencia ,index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 overflow-hidden">
                            <div className="w-40 text-gray-500">{experiencia.Fecha}</div>
                            <div className="flex-1 flex flex-col gap-y-4 ">
                                <h3 className="text-black font-semibold ">
                                    {experiencia.Cargo} · {experiencia.Empresa}
                                </h3>
                                <p className="w-auto text-gray-400 text-wrap">{experiencia.informacion}</p>
                                <div className="flex flex-wrap  gap-2 text-xs">
                                    {experiencia.Herramientas.map((habilidad) => (
                                        <Minibutton key={habilidad} texto={habilidad} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}