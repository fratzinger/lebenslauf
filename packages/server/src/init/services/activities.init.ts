export default {
  service: "api/v1/activities",
  isFake: true,
  entries: [
    {
      title: "Hanseatic Efficiency",
      establishment: "Universität Rostock",
      icon: "fas fa-car",
      startAt: new Date(2013, 10),
      endAt: new Date(2014, 9),
      descriptions: [
        'Teilnahme als Team beim Shell Eco Marathon 2014 in Rotterdam in der Klasse "Benzin" (11. Platz - 743km Reichweite mit 1l Benzin)',
        "Programmierung verschiedener Sensoren zur Telemetrie des Fahrzeugs"
      ],
      skills: [
        "Raspberry Pi",
        "Arduino",
        "C (Arduino)",
        "Verschaltung",
        "Löten",
        "Prototyping",
        "Leichtbau",
        "Maschinenbau"
      ]
    },
    {
      title: "Praktikum",
      establishment: "Fraunhofer IGP Rostock",
      icon: "fas fa-laptop-code",
      startAt: new Date(2014, 8),
      endAt: new Date(2014, 10),
      descriptions: [
        "Programmierung einer C#/WinForms-Anwendung und Microsoft Access Datenbank zur Visualisierung und Verwaltung einer Lagerflächenbelegung mit Rohren von Offshore-Windkraftanlagen"
      ],
      skills: [
        "C#",
        "Microsoft Access",
        "WinForms",
        "Gtk+",
        "OOP",
        "LINQ",
        "Lagerflächenbelegung"
      ]
    },
    {
      title: "Studentische Hilfskraft",
      establishment: "Fraunhofer IGP Rostock",
      icon: "fas fa-laptop-code",
      startAt: new Date(2014, 10),
      endAt: new Date(2017, 11),
      descriptions: [
        "Programmierung einer C# Anwendung zur Anbindung an Texnomatix RobotExpert (Roboter-Offlineprogrammierung), mit dem das komplexe Programm sehr intuitiv für das Vorbohren von gegossenen Schiffspropellern durch den am Fraunhofer IGP entwickelten Großroboter",
        "Programmierung eines Cobots (Universal Robots UR10) mit PolyScope, URScript, Socket-Verbindung",
        "Schnittstellenprogrammierung zu einer proprietären UDP/IP-"
      ],
      skills: [
        "C#",
        "Node.JS",
        "Microsoft Access",
        "PostgreSQL",
        "jQuery",
        "HTML",
        "CSS",
        "Roboterprogrammierung (Online/Offline)",
        "Universal Robots",
        "Robot Expert",
        "Tecnomatix Interface",
        "Wiss. Arbeiten",
        "Raspberry Pi",
        "Schaltungen"
      ]
    },
    {
      title: "IT-Vorstand",
      establishment: "VWI Hochschulgruppe Rostock e.V.",
      icon: "fab fa-wordpress",
      startAt: new Date(2016, 4),
      endAt: new Date(2017, 5),
      descriptions: [
        "Erstellung und administrative sowie inhaltliche Verwaltung einer Internetpräsenz zur Außendarstellung der universitätsnahen Hochschulgruppe des Verein der Wirtschaftsingenieure (Wordpress, Themes, Plugins, HTML, CSS, PHP)",
        "Vefassen und Vertrieb von monatlichen Newslettern",
        "Koordination und Mithilfe verschiedener studentischer Aktivitäten (Werksbesichtigung BMW Leipzig, Spendenaktionen, WING-Connect)"
      ],
      skills: [
        "Wordpress (CMS, Themes, Plugins)",
        "HTML",
        "CSS",
        "PHP",
        "HTML-Email",
        "Administration",
        "Koordination"
      ]
    }
  ]
};
