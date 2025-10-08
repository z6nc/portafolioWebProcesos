import { Herramientas } from "../../../data/herramienta"
import { Minibutton } from "../../common/minibutton/minibutton"
export const Habilidades  =()=>{
    return(
  
<section id="Habilidades" className="grid grid-cols-1 xl:grid-cols-2 gap-12 p-9 bg-white rounded-lg text-sm text-gray-500 ">
    
    {
        Herramientas.map((h) => (
            <div className="flex flex-col gap-y-4">
                <h3 className="uppercase font-semibold">{h.titulo}</h3>
                <div className="flex flex-wrap  gap-2 text-sm ">
                    {
                        h.heramienta.map((habilidad) => (
                            <Minibutton texto={habilidad} />
                        ))
                    }
                </div>
            </div>
        ))
    }
   
</section>
    )
}