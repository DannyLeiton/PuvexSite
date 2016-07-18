var app = angular.module('puvex',['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Puvex',
    GREETINGS: 'We code your ideas!',
    SERVICES: 'Services',
    PORTFOLIO: 'Portfolio',
    SKILLS: 'Our Skills',
    ABOUT: 'Acerca de',
    TEAM: 'Team',
    CONTACT: 'Contact',
    WELCOME2: "Let's Make Software",
    TELLMEMORE: 'Know us',
    BUTTON_LANG_EN: 'Español',
    SERVICESDESC: 'We are a small team of software engineers based in San José, Costa Rica. We have the mission to collaborate with our talent to projects anywhere in the world. We use an incremental development approach based on functional deliverables.',
    WEBDEV: 'Web Development',    
    WEBDEVDESC: 'We make awesome complete websites and web applications with the latest technologies',
    MOBILEDEV:'',

  });
  $translateProvider.translations('es', {
    TITLE: 'Puvex',
    GREETINGS: '¡Codificamos sus ideas!',
    SERVICES: 'Servicios',
    PORTFOLIO: 'Portafolio',
    SKILLS: 'Expertise',
    ABOUT: 'Acerca de',
    TEAM: 'Equipo',
    CONTACT: 'Contacto',
    WELCOME2: 'Hagamos Software',
    TELLMEMORE: 'Con&oacute;zcanos',
    BUTTON_LANG_EN: 'English',
    SERVICESDESC: 'Somos un pequeño equipo de ingenieros de software establecido en San José, Costa Rica.Tenemos la misión de aportar nuestro talento a proyectos por implementar en cualquier parte del Mundo. Entregamos los productos de manera incremental.',
    WEBDEV: 'Desarrollo Web',    
    WEBDEVDESC: 'Hacemos portales Web Completos y Aplicaciones a la medida con tecnologías actuales',
  });
  $translateProvider.preferredLanguage('en');
});

app.controller('MainCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});

