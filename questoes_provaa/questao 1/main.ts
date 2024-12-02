import { empresa } from './empresa';
import { funcionario } from './funcionario';
import { gerente } from './gerente';

let techsolucoes = new empresa('techsolucoes')
let bernardobraga = new funcionario('bernardo', 'desenvolvedor', 10000)
let bernardobraga1 = new funcionario('bernardinho', 'enhengeiro', 7000)
let bernardobraga2 = new funcionario('bernardao', 'motorista', 4000)
let givanaldo = new gerente('givanaldo', 'engenheiro', 20000, 10000)
let givanaldo1 = new gerente('givanaldao', 'desenvolvedor', 20000, 15000)

console.log(techsolucoes)
console.log('salarios antes dos aumentos')
console.log(bernardobraga.descricao())
console.log(bernardobraga1.descricao())
console.log(bernardobraga2.descricao())
console.log(givanaldo.descricao())
console.log(givanaldo1.descricao())

bernardobraga.aplicarAumento(0.15);
bernardobraga1.aplicarAumento(0.10);
givanaldo.aplicarAumento(0.10);

console.log('salarios apos o aumento')
console.log(bernardobraga.descricao())
console.log(bernardobraga1.descricao())
console.log(bernardobraga2.descricao())
console.log(givanaldo.descricao())
console.log(givanaldo1.descricao())

