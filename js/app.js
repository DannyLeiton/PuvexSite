var app = angular.module('puvex',['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Puvex - We code your ideas',
    GREETINGS: 'Welcome To Our Studio!',
    SERVICES: 'Services',
    PORTFOLIO: 'Portfolio',
    ABOUT: 'About',
    TEAM: 'Team',
    CONTACT: 'Contact',
    WELCOME2: "It's Nice To Meet You",
    TELLMEMORE: 'Tell Me More',
    INTROTEXT: 'Contact',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'spanish'
  });
  $translateProvider.translations('es', {
    TITLE: 'Puvex - Codificamos sus ideas',
    GREETINGS: '¡Bienvenido a Nuestro Estudio!',
    SERVICES: 'Servicios',
    PORTFOLIO: 'Portafolio',
    ABOUT: 'Acerca de',
    TEAM: 'Equipo',
    CONTACT: 'Contacto',
    WELCOME2: 'Es Un Placer Conocerle',
    TELLMEMORE: 'Cu&eacute;ntenme m&aacute;s',
    INTROTEXT: 'Contacto',
    BUTTON_LANG_EN: 'ingl&eacute;s',
    BUTTON_LANG_DE: 'espa&ntilde;ol'
  });
  $translateProvider.preferredLanguage('en');
});

app.controller('MainCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});

