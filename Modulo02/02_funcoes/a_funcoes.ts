function lerDados(texto: string | string[] | (() => string) | { s: string }) {
  if (typeof texto === "string") {
    return mostrar(texto);
  } else if (Array.isArray(texto)) {
    return texto.map(mostrar).join(",");
  } else if (typeof texto === "function") {
    return mostrar(texto());
  } else {
    return texto.s;
  }
}

function mostrar(s: string): string {
  return s;
}

console.log(lerDados("Olá"));
console.log(lerDados(["Olá", "Mundo"]));
console.log(lerDados(() => "Olá Mundo"));
console.log(lerDados({ s: "Olá Mundo" }));

function calcularHipotenusa(param: { a: number; b: number }) {
  return Math.sqrt(param.a ** 2 + param.b ** 2);
    
}

console.log(calcularHipotenusa({ a: 10, b: 15 }));
