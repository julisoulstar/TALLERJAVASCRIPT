class Number {
	constructor() {
		this.array;
		this.pair;
	}
	setArray(array) {
		this.array = array;
	}
	getArray() {
		return this.array;
	}
	setPairs(array) {
		this.pair = array.filter( (e) => {
			return e % 2 === 0;
		});
	}
	getPairs() {
		return this.pair;
	}
}
// Definir arreglo
	let size = parseInt(prompt("Define el tamaño del arreglo"));
	var arreglo = [];
	for (let i = 0; i < size; i++) {
		arreglo[i] = parseInt(prompt("Digite el numero"));
	}

// intanciar la clase
let yenifer = new Number();

yenifer.setArray(arreglo);
console.log(yenifer.getArray());

yenifer.setPairs(yenifer.getArray());
console.log(yenifer.getPairs());

