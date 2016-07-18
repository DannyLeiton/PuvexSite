var app = angular.module('puvex',['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {    
    CHANGELANG: 'Cambiar a idioma Español',
    BUTTON_LANG_EN: 'Español',
    HOME: 'Home',
    TITLE: 'This is Puvex',
    GREETINGS: 'We code your ideas!',
    WELCOME2: "Let's Make Software",
    TELLMEMORE: 'Know us',    
    ABOUT: 'About',
    ABOUT2: 'Who are we?',
    ABOUT3: 'A TEAM OF DEVELOPERS',
    ABOUT4: 'Senior Engineers',
    ABOUT5: 'We are a small team of software engineers based in San José, Costa Rica!',
    ABOUT6: 'WITH GLOBAL VISION',
    ABOUT7: 'Worldwide Collaboration',
    ABOUT8: 'With the mission to collaborate with our talent to projects anywhere in the world',
    ABOUT9: 'PRODUCT ORIENTED',
    ABOUT10: 'Effective Development',
    ABOUT11: 'Using an incremental development approach based on functional deliverables',
    SERVICES: 'Services',
    SERVICES2: 'What do we do?',
    TOOLS: 'Tools',
    TOOLS2: 'How do we do it?',
    PORTFOLIO: 'Portfolio',
    TEAM: 'THE Team',
    SERVICESDESC: 'Some of our services are:',
    WEBDEV: 'Web Development',    
    WEBDEVDESC: 'We make awesome complete websites and web applications with the latest technologies',
    MOBILEDEV:'Mobile Development',
    MOBILEDEVDESC:"Imagine an App... We'll make it possible for Android and iOS",
    GAMESDEV:'Video Games',
    GAMESDEVDESC:"Who doesn't like videogames? It's time to have fun coding creative software",  
  
    
    CONTACT: 'Contact',
    CONTACT2: 'Contact us'

});

  /*
   'We are a small team of software engineers 
    based in San José, Costa Rica. 
    We have the mission to collaborate with our talent to projects anywhere in the world. 
    We use an incremental development approach based on functional deliverables.'
  */

  $translateProvider.translations('es', {
    CHANGELANG: 'Switch to English Language',
    BUTTON_LANG_EN: 'English',
    HOME: 'Inicio',
    TITLE: 'Somos Puvex',
    GREETINGS: '¡Codificamos sus ideas!',
    WELCOME2: 'Hagamos Software',
    TELLMEMORE: 'Conózcanos',
    ABOUT: '¿Quiénes somos?', 
    ABOUT2: '¿Quiénes somos?',
    ABOUT3: 'UN EQUIPO DE PROGRAMADORES',
    ABOUT4: 'Ingenieros Experimentados',
    ABOUT5: 'Somos un pequeño equipo de ingenieros de software establecido en San José, Costa Rica!',
    ABOUT6: 'CON VISION GLOBAL',
    ABOUT7: 'Colaborando en todo el mundo',
    ABOUT8: 'Tenemos la misión de aportar nuestro talento a proyectos por implementar en cualquier parte del Mundo',
    ABOUT9: 'ORIENTADOS AL PRODUCTO',
    ABOUT10: 'Desarrollo Efectivo',
    ABOUT11: 'Entregamos los productos funcionales de manera incremental', 
    SERVICES: 'Servicios',
    SERVICES2: '¿Qué hacemos?',
    TOOLS: 'Herramientas',
    TOOLS2: '¿Cómo lo hacemos?',
    PORTFOLIO: 'Portafolio',
    TEAM: 'EL Equipo',
    SERVICESDESC: 'Algunos de nuestros servicios son:',
    WEBDEV: 'Desarrollo Web',    
    WEBDEVDESC: 'Hacemos portales Web Completos y Aplicaciones a la medida con tecnologías actuales',
    MOBILEDEV:'Desarrollo para Móviles',
    MOBILEDEVDESC:'El app que a usted se le ocurra, la hacemos posible para Android y iOS',
    GAMESDEV:'Video Juegos',
    GAMESDEVDESC:'¿A quién no le gustan los video juegos? Es tiempo de divertirse haciendo software creativo',
  

    CONTACT: 'Contacto',
    CONTACT2: 'Contáctenos'
});
  $translateProvider.preferredLanguage('en');
});

/*
  'Somos un pequeño equipo de ingenieros de software 
   establecido en San José, Costa Rica.
   Tenemos la misión de aportar nuestro talento a proyectos por implementar en cualquier parte del Mundo. 
   Entregamos los productos funcionales de manera incremental.',
*/

app.controller('MainCtrl', function ($scope, $translate) {
  $scope.language = 'en';
  $scope.changeLanguage = function (key) {
    $scope.language = key;
    $translate.use(key);
  };
});

