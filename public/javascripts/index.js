require('angular');
require('../node_modules/angular-aria/index');
require('../node_modules/angular-animate/index');
require('../node_modules/angular-material/index');
require('../node_modules/@uirouter/angularjs/release/angular-ui-router.min.js');

var css = require('../stylesheets/scss/main.scss');

import './service/loginService';

import './ctrl/loginCtrl';
import './ctrl/homeCtrl';
import './ctrl/registerCtrl';
import './ctrl/navbar';
import './ctrl/sidebarCtrl';
import './ctrl/categoryCtrl';

import './drv/navbarDrv';
import './drv/sidebarDrv';

import './factory/registerFactory';
import './routes/router';