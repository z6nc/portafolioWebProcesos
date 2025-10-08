import { RedesSociales } from "../../data/RedesSociales.tsx"
import { AreasDeTrabajo } from "../../data/ItemNavbar.ts"
import { ItemNavbar } from "../../data/ItemNavbar.ts"
import { Minibutton } from "../common/minibutton/minibutton.tsx"
export function Navbar() {
    return (
        <nav className=" md:w-xl 2xl:w-[450px] flex flex-col px-9 py-9 md:py-20 justify-between items-center  md:sticky top-0 h-screen ">
            <div className="flex flex-col gap-y-9">
                <section className="flex flex-col gap-y-4">
                    <h1 className="text-4xl xl:text-3xl 2xl:text-4xl font-bold">Andres Daniel Velasquez Arotinco</h1>
                    <div className="flex-wrap flex gap-2 text-sm xl:text-xs 2xl:text-sm">
                        {
                            AreasDeTrabajo.map((area) => (
                                <Minibutton texto={area.area} />
                            ))
                        }
                    </div>
                </section>




                <section className="flex flex-col gap-y-9 ">
                    {
                        ItemNavbar.map((item) => (
                            <a
                                href={item.urlItem}
                                className="hover:text-amber-300 hover:scale-105 transition-transform hover:font-bold text-sm"
                            >
                                {item.item}
                            </a>
                        ))
                    }
                </section>
            </div>

            <section className="inline-flex gap-4">
                {
                    RedesSociales.map((red) => (
                        <a
                            href={red.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl p-1  inline-flex gap-x-4 "
                        >
                            <div className="group-hover:-translate-y-2 transition-transform">
                                {red.Logo}
                            </div>
                            <span className="sr-only">{red.NombreRedSocial}</span>
                        </a>
                    ))

                }
            </section>
        </nav>
    )
}