// new () => any : representa qualquer classe que tenha um contrutor sem parametros
function log(target:  new () => any) {
    console.log(target);
}
export { log }
