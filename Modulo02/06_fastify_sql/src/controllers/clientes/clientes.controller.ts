import { FastifyRequest, FastifyReply } from "fastify";
import { clientesService } from "../../services/clientes/clientes.service";

export class ClientesController {
    getAllClients = async (request: FastifyRequest, response: FastifyReply) => {
        const clientes = await clientesService.getAllClients();
        response.status(200).send(clientes);
    }

    getClientById = async (request: FastifyRequest, response: FastifyReply) => {
        const { id } = request.params as {id: number};

        const cliente = await clientesService.getClientById(id);
        response.status(200).send(cliente);
    }
}