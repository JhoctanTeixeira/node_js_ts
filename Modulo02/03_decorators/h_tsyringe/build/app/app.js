"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const emailservice_1 = require("../services/emailservice");
const notificationservice_1 = require("../services/notificationservice");
// registramos o objeto no container. Este é o objeto 'injetado (inject())'
tsyringe_1.container.register('EmailService', { useClass: emailservice_1.default });
// buscamos uma instância de NotificationService, presente no container
const notificationService = tsyringe_1.container.resolve(notificationservice_1.default);
// consumimos a instância obtida através do container
notificationService.sendNotification('Dependency Injection with TSYRinge');
