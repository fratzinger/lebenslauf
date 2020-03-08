export default {
  service: "api/v1/studies",
  isFake: true,
  entries: [
    {
      title: "Grundschule und Gymnasium",
      type: "school",
      graduation: "Allg. Hochschulreife",
      grade: "1.7",
      establishment: "Katholisches Schulzentrum Bernhardinum in Fürstenwalde (Brandenburg)",
      icon: "fas fa-school",
      startAt: new Date(1999),
      endAt: new Date(2011)
    },
    {
      title: "eBusiness",
      type: "university",
      graduation: "B.Sc.",
      grade: "ohne Abschluss",
      establishment: "BTU Cottbus",
      icon: "fas fa-wifi",
      startAt: new Date(2011, 10),
      endAt: new Date(2012, 9)
    },
    {
      title: "Wirt.-Ing., Vertiefung Maschinenbau",
      type: "university",
      graduation: "B.Sc.",
      grade: "2.1",
      establishment: "Universität Rostock",
      icon: "fas fa-cog",
      startAt: new Date(2012, 10),
      endAt: new Date(2015, 9),
      theses: [
        {
          type: "Bachelorarbeit",
          title: "Konzeption und Umsetzung einer softwaregestützten Ressourcenbelegungsplanung für das mechanische Prüflabor am Fraunhofer AGP Rostock",
          grade: "1.0",
          description: ""
        }
      ]
    },
    {
      title: "Wirt.-Ing., Vertiefung Produktentwicklung",
      type: "university",
      graduation: "M.Sc.",
      grade: "1.7",
      establishment: "Universität Rostock",
      icon: "fas fa-cogs",
      startAt: new Date(2015, 10),
      endAt: new Date(2017, 10),
      theses: [
        {
          type: "Studienarbeit",
          title: "",
          grade: "1.0",
          description: ""
        },
        {
          type: "Masterarbeit",
          title: "Entwicklung einer kraftgeregelten Handhabung für das mechanische Fügen von Flugzeugstrukturen unter Verwendung eines Leichtbauroboters",
          grade: "1.1",
          description: ""
        }
      ]
    }
  ]
};
