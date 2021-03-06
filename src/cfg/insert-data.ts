const defCommands = [{
        name: "advance",
        alias: "avanzar",
        permissionLvl: "modUp",
        params: "-b,-m,-n",
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "avanza el horario",
        message: "",
        custom: 0,
        active: 1
    },
    {
        name: "casters",
        alias: "coms,comentaristas,comentario,comentarista",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "regresa caster actual",
        message: "",
        custom: 0,
        active: 1
    },
    {
        name: "category",
        alias: "categoria,categoría",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "regresa la categoria actual",
        message: "Categoría:",
        custom: 0,
        active: 1
    },
    {
        name: "estimate",
        alias: "estimado",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "regresa estimado actual",
        message: "",
        custom: 0,
        active: 1
    },
    {
        name: "game",
        alias: "juego",
        permissionLvl: "modUp",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "modifica el juego",
        message: "",
        custom: 0,
        active: 1
    },
    {
        name: "runner",
        alias: "runners",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "regresa runner actual",
        message: "",
        custom: 0,
        active: 1
    },
    {
        name: "title",
        alias: "titulo",
        permissionLvl: "modUp",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "modifica el titulo",
        message: "",
        custom: 0,
        active: 1
    },
]

const customCommands = [{
        name: "bidwar",
        alias: "incentivos",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe url de incentivos",
        message: "Puedes ver todos los incentivos de la aquí: ",
        custom: 1,
        active: 0
    },
    {
        name: "discord",
        alias: "disc",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe url de discord",
        message: "¡Entra al Discord de la comunidad! discord.gg/SRE",
        custom: 1,
        active: 1
    },
    {
        name: "donaciones",
        alias: "donar",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe url de donacion",
        message: "¿Quieres mandar un donativo para ? El donativo mínimo son $5, y puedes dirigirlos para un incentivo o sorteo que haya en el momento. Aquí tienes el enlace: , ¡no olvides añadir [SRE] al principio de tu alias para ser leído por los anfitriones en nuestra retransmisión!",
        custom: 1,
        active: 0
    },
    {
        name: "feedback",
        alias: "",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe url de feedback",
        message: "¿Qué te pareció el evento? Nos gustaría recibir tu retroalimentación, así que aquí tienes el enlace: ¡Gracias por tu apoyo!",
        custom: 1,
        active: 0
    },
    {
        name: "glosario",
        alias: "",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe url del glosario",
        message: "Aquí encontrarás el glosario del speedrunning: speedrunslive.com/rules-faq/glossary/es",
        custom: 1,
        active: 1
    },
    {
        name: "hashtag",
        alias: "",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe el hashtag del evento",
        message: "¡No olvides dar Follow al canal, y compartir en Twitter bajo el hashtag #!",
        custom: 1,
        active: 0
    },
    {
        name: "horario",
        alias: "schedule",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe url de horaro",
        message: `Horario: ${process.env.SCHEDULE_URL}`,
        custom: 1,
        active: 1
    },
    {
        name: "info",
        alias: "information",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe información del evento",
        message: `¡SpeedrunsEspañol nos trae ! ¡Quédate con nosotros durante estos dos días en un rato increíble!`,
        custom: 1,
        active: 1
    },
    {
        name: "redes",
        alias: "social",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe las redes sociales",
        message: "Recuerda seguirnos en nuestras redes sociales para estar al tanto del evento y futuros eventos realizados por la comunidad - Twitter: twitter.com/speedrunespanol - Discord: discord.gg/4hrfa25 - Youtube: www.youtube.com/channel/UCHnjAF0-ZNCHWKqxzdfh0sw",
        custom: 1,
        active: 1
    },
    {
        name: "twitter",
        alias: "",
        permissionLvl: "else",
        params: null,
        lastTime: new Date().toISOString(),
        cooldown: 5000,
        description: "escribe url de twitter",
        message: "Siguenos en twitter: twitter.com/SpeedrunEspanol",
        custom: 1,
        active: 1
    },
]

const timers = [{
        name: "discord",
        call: "discord",
        time: 15 * 60000,
        active: 1,
        lastTime: new Date().toISOString(),
        description: "regresa url del discord",
        message: "",
    },
    {
        name: "redes",
        call: "redes",
        time: 10 * 60000,
        active: 1,
        lastTime: new Date().toISOString(),
        description: "regresa redes sociales",
        message: "",
    },
    {
        name: "prueba",
        call: "",
        time: 10 * 60000,
        active: 1,
        lastTime: new Date().toISOString(),
        description: "regresa prueba",
        message: "Este es un mensaje de prueba",
    },
]

module.exports = { defCommands, customCommands, timers }