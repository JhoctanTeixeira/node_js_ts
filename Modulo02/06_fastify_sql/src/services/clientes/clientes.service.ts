import { ICliente } from "../../models/cliente.interface";
import { GenericDao } from "../../repository/genericdao";

export class ClientesService {
    genericDao: GenericDao<ICliente> = new GenericDao<ICliente>();

    getAllClients = async () => {
        return await this.genericDao.getAll("SELECT * FROM TB_CLIENTES");
    }

    getClientById = async (id: number) => {
        return await this.genericDao.getById("SELECT * FROM TB_CLIENTES WHERE ID = ?", id);
    }
}

export const clientesService = new ClientesService();