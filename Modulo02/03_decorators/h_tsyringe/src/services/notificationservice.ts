import { inject, injectable } from "tsyringe";
import EmailService from "./emailservice"

@injectable()
class NotificationService {

    constructor(@inject('EmailService') private emailService: EmailService) {}
    sendNotification(msg: string) {
        this.emailService.sendMail(msg);
    }
}
export default NotificationService;