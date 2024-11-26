import { db } from "./dao";

export class GenericDao<T> {
    async getAll (sql: string) {
        return new Promise<T[]>((resolve, reject) => {
            db.all<T>(sql, (err, rows) => {
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    async getById(sql: string, id: number) {
        return new Promise<T>((resolve, reject) => {
            db.get<T>(sql, id, (err, row) => {
                if(err){
                    reject(err);
                }
                resolve(row);
            });
        });        
    }
}

