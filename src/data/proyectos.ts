interface PropsProyecto {
    id: string;
    nombreProyecto: string;
    informacion: string;
    video: string;
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
        id: "MindStack",
        nombreProyecto: "MindStack",
        informacion: "MindStack es una plataforma que reúne en un solo lugar comandos, snippets y guías rápidas para React.js.",
        video: "https://res.cloudinary.com/dleem7osr/video/upload/v1760826652/mindstack_qdubmd.mp4",
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
        id: "Conewash",
        nombreProyecto: "Automatización de Registro de Compras para un AutoLavado",
        informacion: "Transformé un proceso de ventas manual en un sistema automatizado e inteligente para la toma de decisiones.",
        video: "https://res.cloudinary.com/dleem7osr/video/upload/v1760823360/1017_ovwphj.mp4",
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
    {
        "id": "OnboardExpress",
        "nombreProyecto": "OnboardExpress: Automatización del Proceso de Bienvenida con n8n",
        "informacion": "Automatizo el proceso de bienvenida de nuevos colaboradores mediante n8n, integrando Google Sheets, Gmail y Google Calendar para optimizar la gestión del onboarding.",
        "video": "https://res.cloudinary.com/dleem7osr/video/upload/v1760823360/1017_ovwphj.mp4",
        "informacionExtendida": "OnboardExpress automatiza el flujo completo de incorporación de nuevos empleados. Al registrarse un colaborador en Google Sheets, se desencadena una serie de acciones automáticas: creación de evento en Google Calendar, envío de correo personalizado con su guía de trabajo, y actualización del estado en la base de datos. Todo el proceso se gestiona desde n8n, logrando una bienvenida rápida, personalizada y sin errores manuales.",
        "Preguntas": [
            {
                "pregunta": "¿Cómo surgió la idea de este proyecto?",
                "respuesta": "La idea surgió al observar que muchas empresas registran a sus nuevos colaboradores de forma manual y repiten tareas como enviar correos de bienvenida o agendar reuniones. Decidí automatizar este proceso usando n8n para ahorrar tiempo, reducir errores y ofrecer una experiencia de incorporación más profesional."
            },
            {
                "pregunta": "¿Qué aportes significativos tiene el proyecto?",
                "respuesta": "El proyecto permite centralizar y automatizar todo el proceso de onboarding: desde el registro del empleado hasta el envío de información y la programación de su capacitación. Además, se diseñó de forma escalable, permitiendo agregar nuevos cargos y guías sin modificar la lógica del flujo."
            },
            {
                "pregunta": "¿Por qué alguien debería usar o interesarse en este proyecto?",
                "respuesta": "Cualquier empresa que busque optimizar su proceso de bienvenida puede implementar este sistema sin conocimientos avanzados de programación. OnboardExpress mejora la comunicación interna, garantiza el envío correcto de la información y ahorra horas de trabajo manual en cada incorporación."
            }
        ],
        "datoAviso": "Los datos utilizados en la demostración son ficticios y se emplean únicamente con fines académicos y de prueba.",
        "tecnologias": ["n8n", "Google Sheets", "Google Calendar", "Gmail", "JavaScript"],
        "Año": "2025",
        "url": "/proyecto/OnboardExpress"
    }


];
