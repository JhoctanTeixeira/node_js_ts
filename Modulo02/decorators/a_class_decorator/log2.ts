// new () => any representa qualquer classe que tenha um construtor sem parametros
function log2(prefix: string): Function {
  return (target: any) => {
    console.log(`${prefix} - ${target.name}`);
  };
}

export { log2 };
