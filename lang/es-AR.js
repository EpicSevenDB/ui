// {{ $t("home.aaaaa") }}

const heroAndArtifactCommons = {
    image: "Ilustración",
    icon: "Icono",
    lore: "Historia",
    skill: "Habilidade",
    stats: "Estadísticas",
    grade: "Estrellas", // Technically "Star Grade" -> "Estrellas" but I think it's the most suitable translation for this case.
};

export default {
    languages: {
        en: "Inglés",
        pt: "Portugués",
        es: "Español",
        kr: "Coreano",
    },
    links: {
        home: "Inicio",
        about: "Sobre + Contribuir",
        heroes: "Héroes",
        artifacts: "Artefactos",
        changelog: "Actualizaciones",
        privacyPolicy: "Política de Privacidad",
        back: "Volver",
    },
    loader: {
        message: "Obteniendo datos. Por favor espera...",
    },
    filters: {
        header: "Filtrar lista por:",
        byName: "Buscar por Nombre",
        noResult: "No se encontraron resultados para los filtros seleccionados :(",
        all: "Todo",
        allClasses: "Todas las Clases",
        rarity: "Estrellas",
        classExclusive: "Exclusivo de Clase",
        heroClass: "Clase de Héroe",
        element: "Elemento",
        zodiac: "Signo del Zodiaco",
        buffs: "Buffs",
        debuffs: "Debuffs",
        openFilters: "Clic para ver los filtros disponibles",
        closeAndClear: "Cerrar Filtros & Borrar Selección",
        clearAllFilters: "Borrar Selección",
    },
    errors: {
        title: "Uh oh... Ocurrió un error.",
        description:
            "Si esto continua, por favor abrir un ticket en nuestro Github con la información que aparece debajo (Si alguna es presentada)",
    },
    home: {
        latest: "Nuevos Héroes y Artefactos",
        searchQuestion: "¿Qué es lo que estas buscando?",
        searchPlaceholder: "Buscar héroes o artefactos...",
        currentEvents: "Eventos Actuales",
        appDownloadHeader:
            "EpicSevenDB es una wiki y una base de datos para el juego Epic Seven. Puedes descargar el juego en",
        e7Reddit: "Visita el subreddit de EpicSeven",
        e7Discord: "Únete al canal de Discord del Reddit de EpicSeven",
        tools: "Herramientas",
        version: "Versión",
    },
    artifacts: Object.assign(
        {
            back: "Volver a la lista de artefactos",
            classExclusive: "Exclusivo de Clase",
            baseLevelStats: "Estadísticas en nivel base",
            maxLevelStats: "Estadísticas al nivel máximo",
            baseLevelSkill: "Nivel de habilidad base",
            maxLevelSkill: "Nivel de habilidad máximo",
        },
        heroAndArtifactCommons
    ),
    heroes: Object.assign(
        {
            back: "Volver a la lista de héroes",
            profile: "Perfil",
            classType: "Clase",
            acquire: "Consigue",
            consume: "Consume",
            soul: "Alma",
            passive: "Pasivo",
            turns: "turnos",
            soulBurnEffect: "Efecto de Almas",
            awakening: "Despertar",
            statsIncrease: "Aumento de estadísticas",
            skillUpgrade: "Mejora de habilidad",
            skillUpgradeApplied: "SÍ",
            resources: "Recursos Consumidos",
            imprint: "Sello de Memoria",
            imprintPosition: "Posiciones de Formación",
            noImprint: "La información del sello de memoria todavía no esta disponible.",
            imprintBonus: "Bono",
            maxLevelStats: "Estadísticas a nivel máximo",
            lv1BaseStarNoAwaken: "Nivel 1 base &#9733;",
            lv50FiveStarNoAwaken: "Nivel 50 con 5&#9733; (Sin Despertar)",
            lv60SixStarNoAwaken: "Nivel 60 con 6&#9733; (Sin Despertar)",
            lv60SixStarFullyAwakened: "Nivel 60 con 6&#9733; (Despertar Completo)",
            attributes: {
                cp: "PC",
                atk: "Ataque",
                def: "Defensa",
                hp: "Vida",
                spd: "Velocidad",
                chc: "Probabilidad de crítico",
                chd: "Daño de golpe crítico",
                eff: "Eficacia",
                efr: "Resistencia a efectos",
                dac: "Probabilidad de ataque doble",
            },
            specialty: "Cambio de Especialidad",
            // {normalName} {specialtyTransition} {specialtyName}
            specialtyTransition: "Cambia de especialidad a",
            specialtyExplain: "El héroe tiene que ser nivel 50 antes de poder iniciar el cambio de especialidad.",
            battleArt: "Arte de Batalla",
            relations: "Relaciones",
        },
        heroAndArtifactCommons
    ),
    about: {
        p1:
            "EpicSevenDB.com es un sitio hecho por fans cuyo objetivo es proveer información precisa sobre héros, artefactos, equipamiento, items, misiones, y mucho mas!",
        p2:
            "Para eso, recibe ayuda de la comunidad por medio de sugerencias, ideas e información del juego por medio de Github. Si piensas que puedes darnos una mano, por favor mira los links abajo. ¡Toda la ayuda es apreciada!",
    },
};

// {{ $t("heroes.aaaaa") }}