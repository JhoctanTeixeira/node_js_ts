import 'reflect-metadata'
import { container } from "tsyringe";
import EmailService from "../services/emailservice";
import NotificationService from "../services/notificationservice";

// registramos o objeto no container. Este é o objeto 'injetado (inject())'
container.register('EmailService', { useClass: EmailService})

// buscamos uma instância de NotificationService, presente no container
const notificationService = container.resolve(NotificationService);

// consumimos a instância obtida através do container
notificationService.sendNotification('Dependency Injection with TSYRinge');
