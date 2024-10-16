function executarCallBack() {
    return {
        getList(nomes) {
            this.nomes = nomes;
        },
        search(callback) {
            let subLista = [];
            // vamos realizar uma iteração sobre os elementos da lista
            for (let i = 0; i < this.nomes.length; i++) {
                if(callback(this.nomes[i])){
                    subLista.push(this.nomes[i]);
                }                
            }
            return subLista;
        }
    }
}
module.exports = executarCallBack;
