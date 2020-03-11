export default {
  service: "api/v1/skills",
  isFake: true,
  entries: [
    {
      name: "Javascript ES6",
      value: 95,
      type: "Programmiersprache",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png",
      url: "https://developer.mozilla.org/de/docs/Web/JavaScript",
      description: "JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
      learnedAt: new Date(2014, 1),
      explanation: "Angefangen im Browser mit jQuery, bis zur modernen Webprogrammierung mit ES6, Babel, OOP, ES modules."
    },
    {
      name: "Node.js",
      value: 90,
      type: "Backend",
      logo: "https://nodejs.org/static/images/logo-light.svg",
      url: "https://github.com/nodejs/node",
      description: "Node.js is an open-source, cross-platform, JavaScript runtime environment. It executes JavaScript code outside of a browser.",
      learnedAt: new Date(2017, 6),
      explanation: "Angefangen mit Express, Pug, jQuery, Bower und Postgres bis Rest-API mit sequelize, websockets, jwt, ACL, eslint, TDD."
    },
    {
      name: "Vue.js",
      value: 100,
      type: "Frontend",
      lang: "Javascript",
      logo: "https://vuejs.org/images/logo.png",
      url: "https://github.com/vuejs/vue",
      description: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
      learnedAt: new Date(2018, 1),
      explanation: "Vue CLI mit Router, Store, Electron, Cordova, PWA, Options & Composition API und einem guten Überblick über awesome vue."
    },
    {
      name: "Express / Koa",
      value: 80,
      type: "Backend",
      lang: "Javascript",
      logo: "https://i.cloudup.com/zfY6lL7eFa-3000x3000.png",
      url: "https://github.com/expressjs/express",
      description: "Fast, unopinionated, minimalist web framework for node.",
      learnedAt: new Date(2017, 6),
      color: "secondary",
      explanation: "Vom händischen Routing zu pg-promise mit Middlewares (bspw. Passport.js) zu höheren Frameworks (Feathers.js, Loopback, Sails, Strapi)"
    },
    {
      name: "Feathers.js",
      value: 95,
      type: "Backend",
      lang: "Javascript",
      logo: "http://feathersjs.com/img/feathers-logo-wide.png",
      url: "https://github.com/feathersjs/feathers",
      description: "A framework for real-time applications and REST APIs with JavaScript and TypeScript",
      learnedAt: new Date(2018, 6),
      color: "secondary",
      explanation: "Viel im Einsatz mit verschiedenen Plugins (hooks-common, CASL, Sequelize) mit sehr guter Integration in Vue durch feathers-vuex."
    },
    {
      name: "C#",
      value: 70,
      type: "Programmiersprache",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/150px-C_Sharp_logo.svg.png",
      url: "https://docs.microsoft.com/de-de/dotnet/csharp/",
      description: "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.",
      learnedAt: new Date(2014, 8),
      explanation: "Meine erste, ernsthafte Programmiersprache mit WinForms, EF7, MS Access und OOP."
    },
    {
      name: "MQTT (Mosquitto)",
      value: 70,
      type: "Technologie",
      logo: "http://mqtt.org/new/wp-content/uploads/2011/08/mqttorg-glow.png",
      url: "http://mqtt.org/",
      description: "MQTT is a machine-to-machine (M2M) \"Internet of Things\" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport.",
      learnedAt: new Date(2016, 6),
      color: "negative",
      explanation: "Als Heimprojekt begonnen und in verschiedenen Anwendungen implementiert."
    },
    {
      name: "TDD (Mocha/Chai, Jest)",
      value: 65,
      type: "Development",
      lang: "Javascript",
      logo: "https://cldup.com/xFVFxOioAU.svg",
      url: "https://github.com/mochajs/mocha",
      description: "Simple, flexible, fun JavaScript test framework for Node.js & The Browser",
      learnedAt: new Date(2019, 1),
      color: "blue-grey-10",
      explanation: "Sowohl zum Testen von Backend als auch Frontend."
    },
    {
      name: "CI/CD (Travis,Circle,Gitlab)",
      value: 50,
      type: "Development",
      logo: "https://travis-ci.org/images/logos/TravisCI-Mascot-1.png",
      url: "https://travis-ci.com/",
      description: "Easily sync your projects with Travis CI and you'll be testing your code in minutes.",
      learnedAt: new Date(2019, 6),
      color: "blue-grey-10",
      explanation: "Deployment von Github zu Heroku/AWS"
    },
    {
      name: "Typescript",
      value: 70,
      type: "Programmiersprache",
      logo: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
      url: "https://github.com/microsoft/TypeScript",
      description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      learnedAt: new Date(2019, 10),
      explanation: "Endlich die Typisierung in Javascript."
    },
    {
      name: "Eslint",
      value: 95,
      type: "Development",
      lang: "Javascript",
      logo: "https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg",
      url: "https://github.com/eslint/eslint",
      description: "ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.",
      learnedAt: new Date(2017, 6),
      color: "blue-grey-10",
      explanation: "Weil ich schon immer sehr auf einheitlichen Code geachtet habe."
    },
    {
      name: "Webpack",
      value: 70,
      type: "Development",
      lang: "Javascript",
      logo: "",
      url: "",
      description: "",
      learnedAt: new Date(2018, 1),
      color: "blue-grey-10",
      explanation: "Angefangen mit RequireJS, Browserify, Gulp und Grunt bis hin zu Webpack mit Babel"
    },
    {
      name: "Git",
      value: 100,
      type: "Development",
      logo: "",
      url: "",
      description: "",
      learnedAt: new Date(2016, 1),
      color: "blue-grey-10",
      explanation: "Sowohl als reine Versionsverwaltung, als auch als Managementtool (Github, Gitlab, Bitbucket) mit Issues, Labels, Tags in privaten, als auch public repositories"
    },
    {
      name: "Python",
      value: 40,
      type: "Programmiersprache",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png",
      url: "https://www.python.org/",
      description: "Python is an interpreted, high-level, general-purpose programming language.",
      learnedAt: new Date(2015, 1),
      explanation: "Hauptsächlich in Verwendung mit dem Raspberry Pi"
    },
    {
      name: "Arduino",
      value: 50,
      type: "Microcontroller",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2000px-Arduino_Logo.svg.png",
      url: "https://www.arduino.cc/",
      description: "Python is an interpreted, high-level, general-purpose programming language.",
      learnedAt: new Date(2013, 6),
      explanation: "Egal ob Arduino IDE, Arduino Nano/Uno/Mega, Teensy, ESP32/8266 oder Sensoren."
    },
    {
      name: "Raspberry Pi",
      value: 60,
      type: "Microcontroller",
      logo: "https://upload.wikimedia.org/wikipedia/de/thumb/c/cb/Raspberry_Pi_Logo.svg/1200px-Raspberry_Pi_Logo.svg.png",
      url: "https://www.raspberrypi.org/",
      description: "The Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation to promote teaching of basic computer science in schools and in developing countries.",
      learnedAt: new Date(2013, 1),
      explanation: "Begonnen mit privaten Projekten (bspw. Magic Mirror) bis zur Verwendung im Fraunhofer IGP"
    },
    {
      name: "Bootstrap",
      value: 80,
      type: "Frontend",
      lang: "Javascript",
      logo: "https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg",
      url: "https://getbootstrap.com/",
      description: "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",
      learnedAt: new Date(2010, 1),
      explanation: "Schon mit Bootstrap 2 begonnen, irgendwann davon weggekommen. Mittlerweile bessere Frameworks mit mehr Funktionsumfang (Element.UI, Quasar) oder minimalistischer (Tailwind)."
    },
    {
      name: "Tensorflow",
      value: 30,
      type: "Backend",
      lang: "Python",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/2000px-Tensorflow_logo.svg.png",
      url: "https://www.arduino.cc/",
      description: "TensorFlow is an end-to-end open source platform for machine learning.",
      learnedAt: new Date(2019, 1),
      color: "secondary",
      explanation: "Um zu verstehen, wie man neuronale Netze programmiert und in ML nicht den Anschluss zu verlieren."
    },
    {
      name: "HTML (HTML5)",
      value: 95,
      type: "Frontend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
      url: "https://developer.mozilla.org/de/docs/Web/HTML/HTML5",
      description: "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup-based pattern to it.",
      learnedAt: new Date(2007, 1),
      explanation: "In der Schule noch mit HTML4 und Table-Layouts programmiert, dann divs mit float und clearfix, dann Flexbox."
    },
    {
      name: "CSS, SASS, Less, Stylus",
      value: 70,
      type: "Frontend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
      url: "https://www.w3schools.com/css/",
      description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
      learnedAt: new Date(2007, 1),
      explanation: "Von CSS2 mit floats, display: inline/block zu CSS3 und SCSS mit transitions, Variablen und Nesting."
    },
    {
      name: "React",
      value: 25,
      type: "Frontend",
      lang: "Javascript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png",
      url: "https://github.com/facebook/react/",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      learnedAt: new Date(2019, 1)
    },
    {
      name: "Angular",
      value: 20,
      type: "Frontend",
      lang: "Javascript",
      logo: "https://angular.io/assets/images/logos/angular/angular.svg",
      url: "https://github.com/angular/angular",
      description: "Angular (commonly referred to as \"Angular 2+\") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
      learnedAt: new Date(2018, 6)
    },
    {
      name: "SQL (Postgres, MySQL)",
      value: 70,
      type: "Programmiersprache",
      logo: "https://upload.wikimedia.org/wikipedia/de/thumb/4/4b/Postgresql.svg/200px-Postgresql.svg.png",
      url: "https://www.postgresql.org/",
      description: "PostgreSQL, also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and technical standards compliance.",
      learnedAt: new Date(2009, 1)
    },
    {
      name: "Sequelize, Bookshelf, Objection",
      value: 80,
      type: "Backend",
      lang: "Javascript",
      logo: "https://cdn.worldvectorlogo.com/logos/sequelize.svg",
      url: "https://github.com/sequelize/sequelize",
      description: "Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.",
      learnedAt: new Date(2018, 1),
      color: "secondary"
    },
    {
      name: "Electron.js, Cordova, Capacitor",
      value: 50,
      type: "Frontend",
      lang: "Javascript",
      logo: "https://electronjs.org/images/electron-logo.svg",
      url: "https://www.electronjs.org/docs",
      description: "Build cross-platform desktop apps with JavaScript, HTML, and CSS. Cordova Android is an Android application library that allows for Cordova-based projects to be built for the Android Platform.",
      learnedAt: new Date(2019, 1)
    },
    {
      name: "ROS - Robot Operating System",
      value: 20,
      type: "Robotics",
      logo: "https://www.pilz.com/imagecache/mam/pilz/images/import/01_Products_and_Solutions/A0900_robotics/fittosize__752_0_53ab91fb2e1755765c20d5d1df8d5f9d_l_ros_logo_3c_2018_08_1000x562-mobile-1581519151.jpg",
      url: "https://index.ros.org/doc/ros2/",
      description: "The Robot Operating System (ROS) is a set of software libraries and tools for building robot applications. From drivers to state-of-the-art algorithms, and with powerful developer tools, ROS has what you need for your next robotics project.",
      learnedAt: new Date(2019, 1)
    },
    {
      name: "Universal Robots",
      value: 80,
      type: "Robotics",
      logo: "",
      url: "",
      description: "",
      learnedAt: new Date(2016, 1)
    },
    {
      name: "Progressive Web Apps",
      value: 70,
      type: "Technologie",
      lang: "Javascript",
      logo: "https://www.fzi.de/fileadmin/user_upload/ros_logo.png",
      url: "https://index.ros.org/doc/ros2/",
      description: "Robot Operating System (ROS) is robotics middleware. Although ROS is not an operating system, it provides services designed for a heterogeneous computer cluster such as hardware abstraction, low-level device control, implementation of commonly used functionality, message-passing between processes, and package management.",
      learnedAt: new Date(2019, 6),
      color: "negative"
    },
    {
      name: "Photoshop",
      value: 80,
      type: "Bildbearbeitung",
      logo: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-cs6.svg",
      url: "https://www.adobe.com/de/products/photoshop.html",
      description: "Adobe Photoshop is a raster graphics editor developed and published by Adobe for Windows and macOS.",
      learnedAt: new Date(2009, 1)
    },
    {
      name: "Websocket",
      value: 90,
      type: "Technologie",
      logo: "",
      url: "",
      description: "",
      learnedAt: new Date(2017, 6),
      color: "negative"
    },
    {
      name: "REST (CRUD)",
      value: 90,
      type: "Technologie",
      logo: "",
      url: "",
      description: "",
      learnedAt: new Date(2017, 6),
      color: "negative"
    },
    {
      name: "GraphQL",
      value: 20,
      type: "Technologie",
      logo: "",
      url: "",
      description: "",
      learnedAt: new Date(2019, 6),
      color: "negative"
    },
    {
      name: "Wordpress",
      value: 95,
      type: "CMS",
      logo: "",
      url: "",
      description: "",
      learnedAt: new Date(2009, 1)
    },
    {
      name: "Lodash / Underscore",
      value: 75,
      type: "Tooling",
      logo: "",
      url: "",
      description: "",
      learnedAt: new Date(2017, 6)
    },
  ]
};

/*

    {
      name: "",
      value: ,
      type: "",
      logo: "",
      url: "",
      description: "",
      learnedAt:
    },

*/
