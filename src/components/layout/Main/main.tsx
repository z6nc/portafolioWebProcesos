import { SobreMi } from "./AboutMi"
import { Experiencia } from "./Experiencia"
import { Habilidades } from "./Habilidades"
import { Proyectos } from "./Proyectos"
import { Contacto } from "./Contacto"
export function Main() {
    return (
        <main
            className="flex-1 flex flex-col p-6  xl:px-2 2xl:px-20 py-20 gap-y-9"
        >
            <SobreMi />
            <Experiencia />
            <Habilidades />
            <Proyectos />
            <Contacto />
            <div className="flex flex-col md:flex-row mx-auto md:mx-0 text-center justify-between gap-4 items-center">
                <a href="/" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Enviar mensaje
                </a>
                <a
                    className="underline text-blue-500 hover:text-blue-800"
                    href="https://andresvelasquezdev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Portafolio de desarrollador web
                </a>
            </div>
            <p className="text-center text-sm">Creado con mucho ❤️ por Andres</p>
        </main>
    )
}