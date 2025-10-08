interface PropsProyecto {
    id: string;
    nombreProyecto: string;
    informacion: string;
    video?: string;
    informacionExtendida: string;
    Preguntas: {
        pregunta: string;
        respuesta: string;
    }[];
    datoImportante?: string;
    datoAviso?: string;
    tecnologias: string[];
    Año: string;
    url: string;
    link?: string;
}

export const ListaProyectos: PropsProyecto[] = [

  {
    id:"MindStack",
    nombreProyecto: "MindStack",
    informacion: "MindStack es una plataforma que reúne en un solo lugar comandos, snippets y guías rápidas para React.js.",
    informacionExtendida: "MindStack es una plataforma que recopila comandos de instalación de paquetes de diferentes tipos para el ecosistema de React, como React Router, React Coin, Tailwind, React Icons, entre otros. Facilita el acceso rápido a información útil para desarrolladores que trabajan con React, mejorando la productividad y organización del trabajo.",
    Preguntas: [
        {
            pregunta: "¿Cómo surgió la idea MindStack?",
            respuesta: "La idea surgió de mi necesidad personal de ahorrar tiempo al buscar comandos de React y facilitar mi flujo de trabajo, pero pensé en crear una herramienta útil para todos los desarrolladores, centralizando la información en un solo lugar y haciendo más eficiente la gestión de proyectos."
        },
        {
            pregunta: "¿Qué aportes significativos tiene MindStack?",
            respuesta: "MindStack aporta eficiencia y organización al ecosistema React, ofreciendo comandos preconfigurados, guías rápidas y compatibilidad con múltiples gestores de paquetes. Permite a los desarrolladores ahorrar tiempo, evitar errores y enfocarse en la construcción de proyectos en lugar de perderse buscando documentación dispersa."
        },
        {
            pregunta: "¿Por qué alguien debería usar o interesarse en este proyecto?",
            respuesta: "Cualquier desarrollador que busque optimizar su flujo de trabajo en React encontrará en MindStack una herramienta práctica y confiable. Facilita el acceso rápido a comandos, librerías y guías esenciales, ayudando a crear proyectos de manera más rápida, organizada y profesional."
        }
    ],
    datoImportante: "Más de 40 usuarios recurrentes",
    tecnologias: ["Next.js", "TypeScript", "TailwindCSS"],
    Año: "2025",
    url: "/proyecto/MindStack",
    link: "https://mindstackdev.vercel.app/"
},

{
    id:"Conewash",
    nombreProyecto: "Automatización de Registro de Compras para un AutoLavado",
    informacion: "Transformé un proceso de ventas manual en un sistema automatizado e inteligente para la toma de decisiones.",
    informacionExtendida: "Este proyecto sirve para automatizar el registro de ventas, asegurar la privacidad de los datos y generar reportes visuales que permitan analizar las ganancias y desempeño de la empresa.",
    Preguntas: [
        {
            pregunta: "¿Cómo surgió la idea de este proyecto?",
            respuesta: "La idea surgió en 2021, cuando trabajaba en un carwash familiar y observé que todos los registros de ventas se anotaban en una pizarra y se borraban al final del día.  En ese momento no le di importancia, pero ahora entiendo que los datos son fundamentales para la toma de decisiones y crecimiento de una empresa. Por eso quise crear un sistema que permitiera conservar y analizar los datos de manera eficiente, incluso para empresas con bajo presupuesto.",
        },
        {
            pregunta: "¿Qué aportes significativos tiene el proyecto?",
            respuesta: "Este proyecto permite automatizar el registro de ventas, asegurar la privacidad de los datos y generar reportes visuales en Power BI. Gracias a él, los propietarios pueden conocer las ganancias diarias y tomar decisiones basadas en información confiable, mejorando la eficiencia operativa y la planificación del negocio."
        },
        {
            pregunta: "¿Por qué alguien debería usar o interesarse en este proyecto?",
            respuesta: "Cualquier pequeña empresa que quiera optimizar sus procesos de ventas y análisis de datos encontrará en este proyecto una solución económica, segura y eficiente. Permite tener control sobre la información, generar reportes visuales y tomar decisiones estratégicas sin necesidad de invertir en sistemas costosos."
        }
    ],
    datoAviso: "Los datos mostrados son ficticios y se utilizan únicamente con fines demostrativos.",
    tecnologias: ["Bizagi Model", "SharePoint", "Power Automate", "Power BI"],
    Año: "2025",
    url: "/proyecto/Conewash"
},


];
