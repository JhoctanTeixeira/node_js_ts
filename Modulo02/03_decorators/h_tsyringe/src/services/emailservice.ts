import { injectable } from "tsyringe";

@injectable()
class EmailService {
    sendMail(msg: string) : void {
        console.log(`Email enviado com a mensagem: ${msg}`);
    }
}

export default EmailService;