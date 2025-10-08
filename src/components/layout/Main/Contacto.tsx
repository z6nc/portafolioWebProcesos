import { RedesSociales } from "../../../data/RedesSociales"
export const Contacto = () => {
    return (

        <section id="Contacto" className="flex flex-col gap-y-4 p-9 bg-white rounded-lg  text-gray-500 overflow-hidden">
            <h3 className="font-bold text-lg text-black">Trabajemos juntos</h3>
            <p className=" text-gray-500 w-auto md:w-4xl">Estoy disponible para nuevos proyectos y colaboraciones. No dudes en contactarme para discutir cómo puedo contribuir a tu equipo o proyecto.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    RedesSociales.map((red, index) => (
                        <a
                            href={red.url}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group  overflow-hidden "
                        >
                            <div className="flex flex-col md:flex-row text-center md:text-start items-center gap-x-4 border border-gray-200  p-3 rounded-lg group-hover:shadow-sm">
                                <div
                                    className="size-6 md:size-7 group-hover:-translate-y-2 transition-transform"
                                >
                                    {red.Logo}
                                </div>
                                <div className="">
                                    <h4 className="font-semibold text-sm ">{red.NombreRedSocial}</h4>
                                    <span className="text-xs text-gray-400">{red.NickName}</span>
                                </div>
                            </div>
                            <span className="sr-only">{red.NombreRedSocial}</span>
                        </a>
                    ))
                }

            </div>
        </section>
    )
}