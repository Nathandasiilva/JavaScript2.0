"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _HomeControllers = require('../controllers/HomeControllers'); var _HomeControllers2 = _interopRequireDefault(_HomeControllers);

const routes = new (0, _express.Router)();

routes.get('/', _HomeControllers2.default.index);

exports. default = routes;
