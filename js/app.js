var app = angular.module('puvex',['pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    TITLE: 'Puvex',
    GREETINGS: 'We code your ideas!',
    SERVICES: 'Services',
    PORTFOLIO: 'Portfolio',
    SKILLS: 'Our Skills',
    TEAM: 'Team',
    CONTACT: 'Contact',
    WELCOME2: "Let's Make Software",
    TELLMEMORE: 'Know us',
    WEBDEV: 'Web Development',
    INTROTEXT: 'Contact',
    BUTTON_LANG_EN: 'english',
    BUTTON_LANG_DE: 'spanish'
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
    WELCOME2: 'Es Un Placer Conocerle',
    TELLMEMORE: 'Con&oacute;zcanos',
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
  $scope.Language = "Español";
});

