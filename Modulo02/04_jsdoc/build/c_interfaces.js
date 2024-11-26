const p1 = { nome: 'Luiz Ignacio', idade: 25 };
// usando jsdoc
/** @type {{nome: string, idade: number}} */
const p2 = { nome: 'Jairo Messias', idade: 50 };
/** @type {Pessoa} */
const p3 = { nome: 'Dilmara Santos', idade: 50 };
/**
 * @typedef {Object} Pessoa
 * @property {string} nome Nome completo da pessoa
 * @property {number} idade Idade da pessoa completo da pessoa
 */
const p4 = { nome: 'Dilmara Santos', idade: 50 };
/**
 * @typedef {Object} Pessoa1
 * @property {string} nome Nome completo da pessoa
 * @property {number} [idade] Idade da pessoa completo da pessoa (opcional: colchetes)
 */
const p5 = { nome: 'Dilmara Santos', idade: 50 };
